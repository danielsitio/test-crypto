import { HTMLAttributes, ReactNode, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
}

const Carousel = ({ children, ...rest }: props) => {

    useEffect(() => {

    })

    return (
        <div className=" relative overflow-hidden" {...rest}>
            <img src="/bitcoin.jpg" alt="imagen" className='object-cover ' />
            <button className="absolute left-0 top-0 bottom-0 w-24 grid place-content-center hover:bg-foreground transition-colors duration-75 "><AiOutlineArrowLeft size={30} /></button>
            <button className="absolute right-0 top-0 bottom-0 w-24 grid place-content-center hover:bg-foreground transition-colors duration-75" ><AiOutlineArrowRight size={30} /></button>
        </div>
    )
}

export default Carousel