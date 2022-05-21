import { HTMLAttributes } from "react"
import { NewsArticleData } from "../../entities/news/NewsArticleData"

interface props extends HTMLAttributes<HTMLTableRowElement> {
    newsArticle: NewsArticleData
}

const NewsArticleRow = ({ newsArticle, ...rest }: props) => {
    const { source, title, url, date } = newsArticle
    const articleDate = new Date(date * 1000)
    return (
        <tr {...rest}>
            <td>{`${articleDate.getDay()}/${articleDate.getMonth() + 1}/${articleDate.getFullYear()} -  ${articleDate.getHours()}:${articleDate.getMinutes() < 10 ? "0" : ""}${articleDate.getMinutes()}`} </td>
            <td><a href={url} target="_blank" rel="noreferrer"> {title}</a></td>
            <td className="flex items-center gap-3"><img src={source.image} width={20} height={20} />{source.name}</td>
        </tr>
    )
}

export default NewsArticleRow