export default class CryptoCurrencieStreamData {
    lastPrice: number
    lastAmount: number
    highest: number
    lowest: number

    constructor(lastPrice: number, lastAmount: number, highest: number, lowest: number) {
        this.lastPrice = lastPrice
        this.lastAmount = lastAmount
        this.highest = highest
        this.lowest = lowest
    }

}