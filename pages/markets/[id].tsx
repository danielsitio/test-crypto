import { useRouter } from "next/router"

const CoinPage = () => {
    const { query } = useRouter()
    const { id } = query
    return (
        <div>
            esta es la página de {id}
        </div>
    )
}
export default CoinPage 
