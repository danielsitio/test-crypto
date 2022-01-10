import NewsItem from "../util/classes/NewsItem"

export const getNewsArticlesData = async () => {
    var news = await fetch("https://data.messari.io/api/v1/news?fields=id,title,content,author/name,published_at,tags",
        {
            headers: {
                "x-messari-api-key": "10ff6d6b-d70f-4ab0-a02a-115ce8908ea8"
            }
        })
        .then(res => res.json())
        .then(json => json.data as Array<NewsItem>)
        .catch(error => [])
    return news
}

export const getNewsArticlesIds = async () => {
    var news = await fetch("https://data.messari.io/api/v1/news?fields=id,title,content,author/name,published_at,tags",
        {
            headers: {
                "x-messari-api-key": "10ff6d6b-d70f-4ab0-a02a-115ce8908ea8"
            }
        })
        .then(res => res.json())
        .then(json => json.data as Array<NewsItem>)
        .catch(error => [])

    return news.map(article => {
        return {
            params: {
                id: article.id
            }
        }
    })
}

export const getArticleData = async (id: string) => {
    var news = await fetch("https://data.messari.io/api/v1/news?fields=id,title,content,author/name,published_at,tags",
        {
            headers: {
                "x-messari-api-key": "10ff6d6b-d70f-4ab0-a02a-115ce8908ea8"
            }
        })
        .then(res => res.json())
        .then(json => json.data as Array<NewsItem>)
        .catch(error => [])

    var filteredArticle = news.filter(article => article.id == id)[0]
    return filteredArticle
}