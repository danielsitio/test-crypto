import { Console } from "console"
import NewsItem from "../util/classes/NewsItem"

var data: Array<NewsItem> | null = null

export const getNewsArticlesData = async () => {
    if (data == null) {
        data = await fetch("https://data.messari.io/api/v1/news?fields=id,title,content,author/name,published_at,tags",
            {
                headers: {
                    "x-messari-api-key": "10ff6d6b-d70f-4ab0-a02a-115ce8908ea8"
                }
            })
            .then(res => res.json())
            .then(json => json.data as Array<NewsItem>)
            .then(data => data.filter(element => element != null && element != undefined))
            .catch((error: Error) => [])
    }
    return data
}

export const getNewsArticlesIds = async () => {
    if (data == null) {
        const ids = await fetch("https://data.messari.io/api/v1/news?fields=id",
            {
                headers: {
                    "x-messari-api-key": "10ff6d6b-d70f-4ab0-a02a-115ce8908ea8"
                }
            })
            .then(res => res.json())
            .then(json => json.data as Array<NewsItem>)
            .then(data => data.filter(element => element != null && element != undefined))

        return ids.map(article => {
            return ({
                params: {
                    id: article.id
                }
            })
        })
    }
    return data.map(article => {
        return ({
            params: {
                id: article.id
            }
        })
    })
}

export const getArticleData = async (id: string | string[] | undefined) => {
    const data = await getNewsArticlesData()

    const filteredArticle = data.filter(article => article.id == id)[0]
    return filteredArticle
}