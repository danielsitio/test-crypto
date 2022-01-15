
import { isBrowser } from './../util/utilFunctions';
import { CryptocurrenciesService } from './CryptocurrenciesService'


export class CryptocurrenciesServiceImp implements CryptocurrenciesService {
    private streamSource
    private static instance: CryptocurrenciesServiceImp
    private constructor() {
        this.streamSource = isBrowser ? new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=7b0954edc0a9bc0140ed33f689b5d305faedb8ba6d16a6194d7a5f2505e6cd2e") : null
    }


    static getInstance() {
        if (this.instance == null) this.instance = new CryptocurrenciesServiceImp
        return this.instance
    }

    subscribeToStreamDataOf(currencies: string[]) {
        this.streamSource!.send(JSON.stringify({ "action": "SubAdd", "subs": this.formatCurrencies(currencies) }))
    }
    unsubscribeToStreamDataOf(currencies: string[]) {
        this.streamSource!.send(JSON.stringify({ "action": "SubRemove", "subs": this.formatCurrencies(currencies) }))
    }
    private formatCurrencies(currencies: string[]) {
        return currencies.map(currencie => `0~Coinbase~${currencie}~USD`)
    }

}

