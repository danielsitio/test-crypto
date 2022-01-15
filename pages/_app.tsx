import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/own/Header'
import { Anchor } from '../components/basic/Anchor'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-primary-1 text-text-1 px-20'>
      <Header />
      < Component {...pageProps} />
      <footer className='flex items-center justify-center py-5 text-xs'>
        Made posible thanks to : <Anchor href='https://www.coingecko.com/' target="_blank" >Coingecko</Anchor > - <Anchor href='https://www.cryptocompare.com/' target="_blank">CryptoCompare</Anchor>
      </footer>
    </div >
  )
}

export default MyApp
