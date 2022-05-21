import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

import parse from "html-react-parser"

interface props extends HTMLAttributes<HTMLElement> {
    id: string
    title: string
    author: string
    date: string
    content: string
    tags?: Array<string>
    isWidget?: boolean
}

export const NewsArticle = ({ id, title, author, date, content, tags, isWidget = false, ...rest }: props) => {



    return (
        <article className={`relative tracking-widest leading-7 overflow-hidden bg-primary-3 rounded-tl-2xl rounded-tr-2xl p-6 ${isWidget ? "widget" : ""}`} {...rest} >
            <header className='mb-4'>
                <h3 className='text-3xl font-bold mb-3'>
                    {isWidget ? <Link href={`/news/${id}`}><a>{title}</a></Link> : title}
                </h3>
                <div className='text-text-2'>
                    <p>By {author}</p>
                    <p>{date}</p>
                </div>
            </header>
            <main>
                {parse(content)}
            </main>
            <footer>
                <p>Los tags son :</p>
                <ul>
                    {
                        tags?.map(tag => <li key={tag}>{tag}</li>)
                    }
                </ul>
            </footer>
            <style jsx>{`
                .widget::after{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 50px;
                    background: linear-gradient(transparent,#00111c);
                }
                `}</style>
        </article>
    )
}
