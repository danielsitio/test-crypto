import Link from "next/link"
import { Anchor } from "../basic/Anchor"
import { Button } from "../basic/Button"

const Header = () => {
    return (
        <header className="relative flex items-center py-4 px-6 gap-5 outline-text-1 outline hover:text-text-2 transition-colors ">
            <Link href="/"><a>CryptoHunter</a></Link>
            <Link href="/news"><a>News</a></Link>
            <div className="grow" />
            <Button>Login</Button>
        </header>
    )
}

export default Header
