export type NewsArticleData = {
    title: string
    url: string
    source: ArticleSource
    date: number
}

type ArticleSource = {
    name: string
    image: string
}

