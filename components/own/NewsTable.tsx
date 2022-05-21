import { HTMLAttributes, ReactNode } from "react"
import { NewsArticleData } from "../../entities/news/NewsArticleData"
import NewsArticleRow from "./NewsArticleRow"

interface props extends HTMLAttributes<HTMLTableElement> {
    news?: Array<NewsArticleData>
    children?: ReactNode
}

const NewsTable = ({ news = [], children, ...rest }: props) => {
    return (
        <table className="table-auto text-xs w-full " cellPadding={10} {...rest} >
            <thead >
                <tr className="bg-primary-2 text-text-2 text-left leading-extra-loose">
                    <th className="">DATE</th><th>TITLE</th><th className="" >SOURCE</th>
                </tr>
            </thead>
            <tbody>
                {
                    children
                }
                {
                    news.map(article => <NewsArticleRow newsArticle={article} />)
                }
            </tbody>

        </table>
    )
}

export default NewsTable