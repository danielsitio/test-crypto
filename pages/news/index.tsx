import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useEffect } from "react"
import { NewsArticle } from "../../components/own/NewsArticle"
import { getNewsArticlesData } from "../../lib/articles"
import NewsItem from "../../util/classes/NewsItem"
import { randomIntFromInterval } from "../../util/utilFunctions"

type props = {
    news: Array<NewsItem>
}

const News = ({ news }: props) => {


    return (
        <>
            <Head>
                <title>News</title>
                <meta name="description" content="adasdsasadsaddass " />

            </Head>
            <section className="px-12 pt-6  xl:px-60 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-6">
                    {news.slice(0, Math.ceil(news.length / 2)).map(({ author, content, id, published_at, tags, title }) => (
                        <li key={id}>
                            <NewsArticle id={id} title={title} author={author.name} date={published_at} content={content} tags={tags} isWidget style={{ height: randomIntFromInterval(250, 350) }} />
                        </li>
                    ))}
                </ul>
                <ul className="space-y-6">
                    {news.slice(-Math.ceil(news.length / 2)).map(({ author, content, id, published_at, tags, title }) => (
                        <li key={id}>
                            <NewsArticle id={id} title={title} author={author.name} date={published_at} content={content} tags={tags} isWidget style={{ height: randomIntFromInterval(250, 350) }} />
                        </li>
                    ))}
                </ul>
            </section></>
    )
}
export default News

export const getStaticProps: GetStaticProps = async (context) => {
    const news = await getNewsArticlesData()
    return {
        props: {
            news
        }
    }
}

