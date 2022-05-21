import CryptoCurrencieStreamData from "./CryptocurrencieStreamData";

export default class CryptocurrencieBasicData extends CryptoCurrencieStreamData {
    name: string
    symbol: string
    image: string
    constructor(name: string, symbol: string, image: string, lastPrice: number, lastAmount: number, highest: number, lowest: number) {
        super(lastPrice, lastAmount, highest, lowest)
        this.name = name
        this.symbol = symbol
        this.image = image
    }
}