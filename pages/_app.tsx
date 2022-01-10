import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/own/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-primary-1 text-text-1'>
      <Header />
      < Component {...pageProps} />
    </div >
  )
}

export default MyApp
