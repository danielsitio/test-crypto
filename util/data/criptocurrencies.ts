import Criptocurrencie from "../classes/Cryptocurrency";

export enum Criptocurrencies {
    BITCOIN = "BTC",
    ETHERUM = "ETH",
    BNB = "BNB",
    TETHER = "USDT",
    SOLANA = "SOL",
    USDCOIN = "USDC",
    CARDANO = "ADA",
    XRP = "XRP",
    TERRA = "LUNA",
    POLKADOT = "DOT",
}

export const isBrowser = typeof window !== "undefined";
export const streamSource = isBrowser ? new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=7b0954edc0a9bc0140ed33f689b5d305faedb8ba6d16a6194d7a5f2505e6cd2e") : null;
export const subscribeToStreamOf = (currencies: Array<string>) => streamSource!.send(JSON.stringify({ "action": "SubAdd", "subs": formatCurrencies(currencies) }))
export const unsuscribeToStreamOf = (currencies: Array<string>) => streamSource!.send(JSON.stringify({ "action": "SubRemove", "subs": formatCurrencies(currencies) }))
export const getTop10ByPrice = async () => {
    const data = await fetch("https://min-api.cryptocompare.com/data/top/price?limit=10&tsym=USD&api_key=7b0954edc0a9bc0140ed33f689b5d305faedb8ba6d16a6194d7a5f2505e6cd2e")
        .then(res => res.json())
        .then(json => json.Data as Array<any>)
        .then(data => data.filter(element => element != null && element != undefined))
        .then(rawData => rawData.map(rawCoin => new Criptocurrencie(rawCoin.CoinInfo.FullName, rawCoin.CoinInfo.Name, rawCoin.CoinInfo.Url)))
        .then(formattedData => JSON.stringify(formattedData))
        .catch((error: Error) => [])

    return data
}



const formatCurrencies = (currencies: Array<string>) => currencies.map(currencie => `0~Kraken~${currencie}~USD`)

export const top10currencies = [
    Criptocurrencies.BITCOIN,
    Criptocurrencies.ETHERUM,
    Criptocurrencies.BNB,
    Criptocurrencies.TETHER,
    Criptocurrencies.SOLANA,
    Criptocurrencies.USDCOIN,
    Criptocurrencies.CARDANO,
    Criptocurrencies.XRP,
    Criptocurrencies.TERRA,
    Criptocurrencies.POLKADOT
] 