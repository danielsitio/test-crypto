import { ButtonHTMLAttributes } from "react"

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className="relative bg-secondary-1 rounded-lg     p-2 font-bold" {...props}>
            <div className="absolute top-0 right-0 animate-ping w-2 h-2 bg-text-1 rounded-full" />
            {
                props.children
            }

        </button>
    )
}
