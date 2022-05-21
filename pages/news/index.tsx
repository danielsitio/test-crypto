import { GetStaticProps, NextPage } from "next"
import { useEffect, useState } from "react"
import NewsTable from "../../components/own/NewsTable"
import SearchBar from "../../components/own/SearchBar"
import { NewsArticleData } from "../../entities/news/NewsArticleData"
import { getNewsArticlesData } from "../../lib/articles"
import { NewsService } from "../../services/news/NewsService"

import { NewsServiceImpl } from '../../services/news/NewsServiceImp'
import Article from "./[id]"
const newsService: NewsService = new NewsServiceImpl()

type props = {
    news: Array<NewsArticleData>
}

const News = ({ news }: props) => {

    const [title, setTitle] = useState("");

    return (
        <>
            <SearchBar filterFunction={setTitle} />
            <NewsTable news={news} />
        </>
    )
}
export default News

export const getStaticProps: GetStaticProps = async (context) => {
    const news = await newsService.getNewsArticlesData()

    return {
        props: {
            news
        }
    }
}

