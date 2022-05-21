import { NewsArticleData } from "../../entities/news/NewsArticleData";


export interface NewsService {
    getNewsArticlesData: () => Promise<Array<NewsArticleData>>
    getNewsArticlesIds: () => any
    getArticleData: () => any
}