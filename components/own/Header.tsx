import Link from "next/link"
import { useEffect } from "react"
import { Button } from "../basic/Button"

const Header = () => {

    return (
        <header className="relative flex items-center py-4 gap-5 text-sm font-semibold  ">
            <Link href="/"><a>To the Moon!</a></Link>
            <Link href="/markets"><a>Markets</a></Link>
            <Link href="/news"><a>News</a></Link>
            <Link href="/nft"><a>NFT</a></Link>
            <div className="grow" />
            <Button>Login</Button>
        </header>
    )
}

export default Header
