import React, { HTMLAttributes, ReactNode, useEffect } from 'react'
import CoinRow from './CoinRow'
import CryptocurrencieBasicData from '../../entities/cryptocurrencie/CryptocurrencieBasicData';
import { CryptocurrenciesServiceImp } from '../../services/cryptocurrencies/CryptocurrenciesServiceImp';
import { CryptocurrenciesService } from '../../services/cryptocurrencies/CryptocurrenciesService';

const cryptocurrenciesService: CryptocurrenciesService = CryptocurrenciesServiceImp.getInstance()

interface props extends HTMLAttributes<HTMLTableElement> {
    coins?: Array<CryptocurrencieBasicData>
    updateData?: boolean
    filter?: string
    children?: ReactNode
}

const CoinTable = ({ coins = [], updateData = false, filter = "", children, ...rest }: props) => {


    useEffect(() => {
        updateData && cryptocurrenciesService.subscribeToStreamDataOf(coins.map(({ symbol }) => symbol))
        return () => { updateData && cryptocurrenciesService.unsubscribeToStreamDataOf(coins.map(({ symbol }) => symbol)) }
    })

    return (
        <>
            <table className='w-full text-right table-fixed px-5 ' cellPadding={10} {...rest}>
                <thead className='' >
                    <tr className=' text-text-2 leading-loose ' >
                        <th className='font-light text-left'>Name</th><th className='font-light '>Last Price</th><th className='font-light'>Last Amount Traded</th><th className='font-light'>Highest price (24H)</th><th className='font-light'>Lowest price (24H)</th>
                    </tr>
                </thead>
                <tbody className='text-2xl'>
                    {
                        children
                    }
                    {
                        coins.map(({ name, symbol, image, lastPrice, lastAmount, highest, lowest }) => name.toLowerCase().includes(filter.toLowerCase()) && <CoinRow updateValues={updateData} key={symbol} name={name} symbol={symbol} image={image} defaultPrice={lastPrice} defaultAmount={lastAmount} defaultHighest={highest} defaultLowest={lowest} />)
                    }
                </tbody>
            </table >
            
        </>
    )
}
export default CoinTable