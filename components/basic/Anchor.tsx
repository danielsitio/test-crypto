import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export const Anchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a className="hover:text-text-2 transition-colors" {...props}>
            {
                props.children
            }
        </a>
    )
}
