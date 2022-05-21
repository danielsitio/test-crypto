import Link from "next/link"
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react"
import CryptoCurrencieStreamData from "../../entities/cryptocurrencie/CryptocurrencieStreamData"
import { CryptocurrenciesService } from "../../services/cryptocurrencies/CryptocurrenciesService"
import { CryptocurrenciesServiceImp } from '../../services/cryptocurrencies/CryptocurrenciesServiceImp'
const cryptocurrencieService: CryptocurrenciesService = CryptocurrenciesServiceImp.getInstance()

interface props extends HTMLAttributes<HTMLElement> {
    updateValues?: boolean
    name: string
    symbol: string
    image: string
    defaultPrice: number
    defaultAmount: number
    defaultHighest: number
    defaultLowest: number
}



const CoinRow = ({ updateValues = false, name, symbol, image, defaultPrice, defaultAmount, defaultHighest, defaultLowest, ...rest }: props) => {

    const [{ lastPrice, lastAmount, highest, lowest }, setData] = useState<CryptoCurrencieStreamData>(new CryptoCurrencieStreamData(defaultPrice, defaultAmount, defaultHighest, defaultLowest))
    const prevPricesRef = useRef<number[]>([lastPrice, highest, lowest])
    useEffect(() => {
        if (updateValues == true) cryptocurrencieService.updateStreamDataOf(symbol, setData)
        prevPricesRef.current = [lastPrice, highest, lowest]
    })
    const prevPrices = prevPricesRef.current

    return (
        <Link href={`/markets/${name.toLowerCase()}`}>
            <tr className="leading-extra-loose hover:bg-primary-2" key={prevPrices![0] + lastPrice} {...rest} >
                <td className="font-medium flex items-center gap-4 text-left "><img className="aspect-square w-6" src={image} alt="image" /><span >{name}</span><span className="text-text-2">{symbol}</span></td><td className={`font-medium ${lastPrice > prevPrices![0] && "animate-gain"} ${lastPrice < prevPrices![0] && "animate-drop"} `}>${lastPrice}</td><td className="font-medium" >{lastAmount}</td><td className={`font-medium ${lastPrice > prevPrices![1] ? "animate-gain" : ""} ${lastPrice < prevPrices![1] ? "animate-drop" : ""} `} >${highest}</td><td className={`font-medium ${lastPrice > prevPrices![2] ? "animate-gain" : ""} ${lastPrice < prevPrices![2] ? "animate-drop" : ""} `}>${lowest}</td>
            </tr>
        </Link>

    )
}

export default CoinRow