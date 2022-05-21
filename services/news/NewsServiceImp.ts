import { NewsArticleData } from './../../entities/news/NewsArticleData';
import { NewsService } from './NewsService';
export class NewsServiceImpl implements NewsService {
    async getNewsArticlesData() {
        return await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=7b0954edc0a9bc0140ed33f689b5d305faedb8ba6d16a6194d7a5f2505e6cd2e")
            .then(res => res.json())
            .then(json => json["Data"])
            .then(data => data.map((json: any) => {
                let a: NewsArticleData = {
                    title: json["title"],
                    date: json["published_on"],
                    source: { name: json["source_info"]["name"], image: json["source_info"]["img"] },
                    url: json["url"]
                }
                return a
            }))
    }
    async getNewsArticlesIds() {

    }
    async getArticleData() {

    }

}