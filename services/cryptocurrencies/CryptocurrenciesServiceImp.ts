
import { Dispatch, SetStateAction } from 'react';
import CryptocurrencieBasicData from '../../entities/cryptocurrencie/CryptocurrencieBasicData';
import CryptocurrencieData from '../../entities/cryptocurrencie/CryptocurrencieData';
import CryptoCurrencieStreamData from '../../entities/cryptocurrencie/CryptocurrencieStreamData';
import { isBrowser } from '../../util/utilFunctions';
import { CryptocurrenciesService, StaticPathObject } from './CryptocurrenciesService'


export class CryptocurrenciesServiceImp implements CryptocurrenciesService {
    private messageHandler: Map<string, Function>
    private streamSource
    private static instance: CryptocurrenciesServiceImp
    private constructor() {
        this.streamSource = isBrowser ? new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=7b0954edc0a9bc0140ed33f689b5d305faedb8ba6d16a6194d7a5f2505e6cd2e") : null
        this.messageHandler = new Map()
    }
    async getHistoricalDataOf(identifier: string) {
        return await fetch(`https://api.coingecko.com/api/v3/coins/${identifier}/market_chart?vs_currency=usd&days=365`)
            .then(res => res.json())
            .then(json => json["prices"])
    }
    async getCryptocurrencieData(identifier: string) {
        return await fetch(`https://api.coingecko.com/api/v3/coins/${identifier}`)
            .then(res => res.json())
            .then(json => new CryptocurrencieData(json["name"], json["symbol"], json["image"]["large"], json["description"]["en"], json["market_data"]["current_price"]["usd"], json["market_data"]["total_volume"]["usd"], 24, 20, json["market_data"]["market_cap"]["usd"]))
    }
    async getCryptocurrenciesIdentifiers() {
        return await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
            .then(res => res.json())
            .then(json => this.transformJsonIntoStaticPaths(json))
    }
    static getInstance() {
        if (this.instance == null) this.instance = new CryptocurrenciesServiceImp()
        return this.instance
    }


    async getBasicDataOfAllCryptocurrencies(perPage: number, page: number) {
        return await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`)
            .then(res => res.json())
            .then(json => this.transformJsonIntoBasicDataArray(json))
    }



    subscribeToStreamDataOf(identifiers: string[]) {
        this.streamSource!.onopen == null ?
            this.streamSource!.onopen = () => this.streamSource!.send(JSON.stringify({ "action": "SubAdd", "subs": this.formatIdentifiersForStreamSub(identifiers) }))
            :
            this.streamSource!.send(JSON.stringify({ "action": "SubAdd", "subs": this.formatIdentifiersForStreamSub(identifiers) }))

        if (this.streamSource!.onmessage == null) this.streamSource!.onmessage = ({ data }) => {
            const { TYPE, FROMSYMBOL, PRICE, LASTVOLUME, HIGH24HOUR, LOW24HOUR } = JSON.parse(data)
            if (TYPE == 2 && this.messageHandler.has(FROMSYMBOL)) this.messageHandler.get(FROMSYMBOL)!(({ lastPrice, lastAmount, highest, lowest }: CryptoCurrencieStreamData) => new CryptoCurrencieStreamData(PRICE == undefined ? lastPrice : PRICE, LASTVOLUME == undefined ? lastAmount : LASTVOLUME, HIGH24HOUR == undefined ? highest : HIGH24HOUR, LOW24HOUR == undefined ? lowest : LOW24HOUR))
        }
    }

    unsubscribeToStreamDataOf(identifiers: string[]) {
        this.streamSource!.send(JSON.stringify({ "action": "SubRemove", "subs": this.formatIdentifiersForStreamSub(identifiers) }))
        this.messageHandler.clear()
    }


    updateStreamDataOf(identifier: string, setState: Dispatch<SetStateAction<CryptoCurrencieStreamData>>) {
        !this.messageHandler.has(identifier) && this.messageHandler.set(identifier, setState)
    }



    async getBasicDataOfCryptocurrencies(identifiers: string[]) {
        return await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Csolana%2Ccardano%2Cdogecoin%2Cpolkadot%2Cmatic-network&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => res.json())
            .then(json => this.transformJsonIntoBasicDataArray(json))
    }

    private formatIdentifiersForStreamSub(identifiers: string[]): Array<string> {
        return identifiers.map(currencie => `2~Coinbase~${currencie}~USD`)
    }
    private formatIdentifiersForBasicData(identifiers: string[]) {
        return identifiers.map(currencie => ``)
    }

    private transformJsonIntoBasicDataArray(json: any): Array<CryptocurrencieBasicData> {
        let result = new Array<CryptocurrencieBasicData>()
        for (var i = 0; i < Object.keys(json).length; i++) {
            result.push(new CryptocurrencieBasicData(json[i]["name"], json[i]["symbol"].toUpperCase(), json[i]["image"], json[i]["current_price"], json[i]["total_volume"], json[i]["high_24h"], json[i]["low_24h"]))
        }
        return result
    }

    private transformJsonIntoStaticPaths(json: any): Array<StaticPathObject> {
        let result: Array<StaticPathObject> = new Array()
        for (var i = 0; i < Object.keys(json).length; i++) {
            result.push({ params: { id: json[i]["id"] } })
        }
        return result
    }

}



