import NewsItem from "./NewsItem";

export default class NewsResponse {
    data: Array<NewsItem>
    constructor(data: Array<NewsItem>) {
        this.data = data
    }
}