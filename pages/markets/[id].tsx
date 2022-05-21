import { GetStaticPaths, GetStaticProps } from "next"
import CryptocurrencieData from "../../entities/cryptocurrencie/CryptocurrencieData"
import { CryptocurrenciesService } from "../../services/cryptocurrencies/CryptocurrenciesService"
import { CryptocurrenciesServiceImp } from "../../services/cryptocurrencies/CryptocurrenciesServiceImp"
import parse from "html-react-parser"
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const cryptocurrenciesService: CryptocurrenciesService = CryptocurrenciesServiceImp.getInstance()


type props = {
    data: string
    historicalData: string
}


const CoinPage = ({ data, historicalData }: props) => {
    const parsedHistoricalData = JSON.parse(historicalData) as Array<any>
    const { name, symbol, description, highest, image, lastAmount, lastPrice, lowest, marketCap } = JSON.parse(data) as CryptocurrencieData

    const [days, setDays] = useState(1)

    useEffect(() => {
    })

    const DayButton = ({ days, label }: { days: number, label: string }) => <button onClick={() => setDays(days)}>{label}</button>

    return (
        <main className="grid grid-cols-3 gap-8 min-h-screen">

            <section className="col-start-1 col-end-2 my-auto" >

                <img src={image} className="mx-auto aspect-square w-28 mb-6" alt="bitcoin" />
                <h3 className="text-center text-3xl font-semibold mb-6" >{name} <span className="text-text-2">{symbol.toUpperCase()}</span></h3>
                <div className="max-h-52 mb-6 overflow-y-auto ">
                    <p className={`leading-7 relative tracking-wider `}>{parse(description)}</p>
                </div>
                <p >Current price: ${lastPrice}</p>
                <p>Market Cap : {marketCap}</p>


            </section>
            <section className=" col-start-2 col-end-4  my-auto">
                <Line data={{
                    labels: parsedHistoricalData.map(coin => {
                        let date = new Date(coin[0])
                        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM ` : `${date.getHours()}:${date.getMinutes()} AM `
                        return days === 1 ? time : date.toLocaleDateString()
                    }),
                    datasets: [{ data: parsedHistoricalData.map(coin => coin[1]), label: `Price (Past ${days} Days)`, borderColor: "#023e7d" }]


                }} options={{ responsive: true, elements: { point: { radius: 1 } } }} />
                <div className="flex justify-center gap-7">
                    <DayButton days={365} label="1 Year" />
                    <DayButton days={90} label="3 Months" />
                    <DayButton days={30} label="1 Month" />
                    <DayButton days={1} label="1 Day" />
                </div>
            </section>


        </main>
    )
}
export default CoinPage

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await cryptocurrenciesService.getCryptocurrenciesIdentifiers()
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const rawData = await cryptocurrenciesService.getCryptocurrencieData(params?.id as string)
    const rawHistoricalData = await cryptocurrenciesService.getHistoricalDataOf(params?.id as string)
    const data = JSON.stringify(rawData)
    const historicalData = JSON.stringify(rawHistoricalData)
    return {
        props: {
            data,
            historicalData,
        }
    }
}
