import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export const Anchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a className="font-bold" {...props}>
            {
                props.children
            }
        </a>
    )
}
