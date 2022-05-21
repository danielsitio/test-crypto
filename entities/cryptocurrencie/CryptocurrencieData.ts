import CryptocurrencieBasicData from "./CryptocurrencieBasicData";

export default class CryptocurrencieData extends CryptocurrencieBasicData {
    description: string
    marketCap: number
    constructor(name: string, symbol: string, image: string, description: string, lastPrice: number, lastAmount: number, highest: number, lowest: number, marketCap: number) {
        super(name, symbol, image, lastPrice, lastAmount, highest, lowest)
        this.description = description
        this.marketCap = marketCap
    }
} 