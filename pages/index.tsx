import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Anchor } from '../components/basic/Anchor'
import CoinTable from '../components/own/CoinTable'
import { CryptocurrenciesServiceImp } from '../services/cryptocurrencies/CryptocurrenciesServiceImp'
import { CryptocurrenciesService } from '../services/cryptocurrencies/CryptocurrenciesService'
import CryptocurrencieBasicData from '../entities/cryptocurrencie/CryptocurrencieBasicData'
import NewsTable from '../components/own/NewsTable'
import { NewsServiceImpl } from '../services/news/NewsServiceImp'
import { NewsService } from '../services/news/NewsService'
import { NewsArticleData } from "../entities/news/NewsArticleData"
import Carousel from '../components/basic/Carousel'
import NewsArticleRow from '../components/own/NewsArticleRow'

const cryptocurrenciesService: CryptocurrenciesService = CryptocurrenciesServiceImp.getInstance()
const newsService: NewsService = new NewsServiceImpl()
type props = {
  mainCryptocurrencies: string
  news: Array<NewsArticleData>
}

const Home = ({ mainCryptocurrencies, news }: props) => {
  const coins = JSON.parse(mainCryptocurrencies) as Array<CryptocurrencieBasicData>


  return (

    <>
      <Head>
        <title>To the moon!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <section>

        <div className='py-16'>
          <h1 className='text-5xl font-normal tracking-wider mb-10'>Somethings about crypto</h1>
          <button className='bg-secondary-1 py-2 px-8 rounded' >Register Now</button>

        </div>
      </section>
      <section>
        <h2 className=' text-2xl font-bold tracking-wider'>Market Trends</h2>
        <CoinTable coins={coins} updateData />
        <div className='flex justify-center items-center p-3'>
          <Anchor href='/markets'>View all criptocurrencies</Anchor>
        </div>
      </section >
    </>

  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const mainCryptocurrencies = await cryptocurrenciesService.getBasicDataOfCryptocurrencies([]).then(data => JSON.stringify(data))
  const news = await newsService.getNewsArticlesData()
  return {
    props: {
      mainCryptocurrencies,
      news
    }
  }
}