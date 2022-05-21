import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import CoinRow from "../../components/own/CoinRow"
import CoinTable from "../../components/own/CoinTable"
import SearchBar from "../../components/own/SearchBar"
import CryptocurrencieBasicData from "../../entities/cryptocurrencie/CryptocurrencieBasicData"
import { CryptocurrenciesService } from "../../services/cryptocurrencies/CryptocurrenciesService"
import { CryptocurrenciesServiceImp } from "../../services/cryptocurrencies/CryptocurrenciesServiceImp"

const cryptocurrenciesService: CryptocurrenciesService = CryptocurrenciesServiceImp.getInstance()


const Markets = () => {
    const [coins, setCoins] = useState<CryptocurrencieBasicData[]>([]);

    const [coinFilter, setCoinFilter] = useState("")

    const fetchData = async () => setCoins(await cryptocurrenciesService.getBasicDataOfAllCryptocurrencies(250, 1))

    useEffect(() => {
        coins.length == 0 && fetchData()
    })

    return (
        <main>
            <div className="flex items-center my-6">
                <h2 className="text-3xl font-extrabold">Markets</h2>
                <div className="grow" />
                <SearchBar filterFunction={setCoinFilter} />
            </div>
            <CoinTable coins={coins} filter={coinFilter} />
        </main>
    )
}
export default Markets
