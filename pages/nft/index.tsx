import { useEffect, useState } from "react"

const NftPage = () => {

    const [users, setUsers] = useState<Array<any>>([])

    const fetchData = async () => {
        await fetch("https://www.binance.com/bapi/nft/v1/public/nft/home-artist")
            .then(res => res.json())
            .then(json => setUsers(json.data.data))
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <div>
            {
                users.map(user => (
                    <div key={user.nickName} style={{ position: "relative", display: "grid", placeContent: "center", overflow: "none", width: 300, height: 200 }}>
                        <div style={{ zIndex: 10 }}>
                            <img src={user.avatarUrl} alt="iamge" width={30} height={30} />
                            <span>{user.nickName}</span>
                            <p>{user.description}</p>
                        </div>
                        <img src={user.bannerUrl} alt="" style={{ position: "absolute", objectFit: "cover" }} />
                    </div>
                ))
            }
        </div>
    )
}

export default NftPage