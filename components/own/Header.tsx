import Link from "next/link"
import { Anchor } from "../basic/Anchor"
import { Button } from "../basic/Button"

const Header = () => {
    return (
        <header className="relative flex items-center py-4 gap-5 ">
            <Link href="/"><Anchor>CryptoHunter</Anchor></Link>
            <Link href="/markets"><Anchor>Markets</Anchor></Link>
            <Link href="/news"><Anchor>News</Anchor></Link>
            <Link href="/news"><Anchor>NFT</Anchor></Link>
            <div className="grow" />
            <Button>Login</Button>
        </header>
    )
}

export default Header
