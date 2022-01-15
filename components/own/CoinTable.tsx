import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import Criptocurrencie from '../../util/classes/Cryptocurrency'
import { streamSource } from '../../util/data/criptocurrencies'

import CoinRow from './CoinRow'

type props = {
    coins: Array<Criptocurrencie>
}


const CoinTable = ({ coins }: props) => {
    const [prices, setPrices] = useState<any>(coins.reduce((prev, curr) => ({ ...prev, [curr.symbol]: 1 }), {}))

    const changePrice = (symbol: string, price: number) => {
        setPrices((prevState: any) => ({ ...prevState, [symbol]: price }))
    }


    const changePriceOf: any = useMemo(() => coins.reduce((acc, cur) => ({ ...acc, [cur.symbol]: (price: number) => changePrice(cur.symbol, price) })), [coins])

    const messageHandler = useCallback(({ data }) => {
        const message = JSON.parse(data)
        message.TYPE == 0 ? changePriceOf[message.FSYM](message.P) : console.log(message)
    }, [changePriceOf])
    useEffect(() => {
        if (streamSource!.onmessage != messageHandler) streamSource!.onmessage = messageHandler
    })

    return (
        <table className='w-full text-left table-auto'>
            <thead className='mb-10'>
                <tr className=' text-text-2 leading-loose' >
                    <th className='font-light'>Name</th><th className='font-light'>Last Price</th><th className='font-light'>Last Volume</th>
                </tr>

            </thead>
            <tbody className='text-2xl'>
                {
                    coins.map(({ name, symbol, image }, index) => <CoinRow key={symbol} name={name} symbol={symbol} price={prices[symbol]} image={image} amount={1} />)
                }
            </tbody>
        </table >
    )
}
export default CoinTable