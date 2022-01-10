import { GetStaticPaths, GetStaticProps } from 'next/types'
import { useRouter } from 'next/router'
import React from 'react'
import { getArticleData, getNewsArticlesIds } from '../../lib/articles'
import { NewsArticle } from '../../components/own/NewsArticle'
import NewsItem from '../../util/classes/NewsItem'


type props = {
    data: NewsItem
}

const Article = ({ data }: props) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <section className='px-20 pt-20'>
            <NewsArticle id={data.id} author={data.author.name} content={data.content} title={data.title} tags={data.tags} date={data.published_at} />
        </section>
    )
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getNewsArticlesIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data = await getArticleData(params.id)
    return {
        props: {
            data
        }
    }
}




