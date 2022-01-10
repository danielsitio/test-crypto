import { ButtonHTMLAttributes } from "react"

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className="bg-secondary-1 rounded-full p-2 font-bold" {...props}>
            {
                props.children
            }
        </button>
    )
}
