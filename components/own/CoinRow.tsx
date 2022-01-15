import { HTMLAttributes } from "react"

interface props extends HTMLAttributes<HTMLElement> {
    name: string
    symbol: string
    image: string
    price: number
    amount: number
}

const CoinRow = ({ name, symbol, image, price, amount, ...rest }: props) => {
    return (
        <tr className="leading-loose"  {...rest} >
            <th className="font-medium inline-flex items-center gap-3"><img className="h-7 aspect-square inline-block" src="https://assets.coingecko.com/coins/images/1/thumb_2x/bitcoin.png?1547033579%202x"></img><span>{name}</span><span className="text-text-2">{symbol}</span></th><th className="font-medium">${price}</th><th className="font-medium">{amount}</th>
        </tr>
    )
}

export default CoinRow