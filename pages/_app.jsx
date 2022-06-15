import Navbar from '../components/Navbar'
import Head from 'next/head'
import { FavouriteProvider } from '../contexts/Favourite'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>MovieHunt</title>
      <meta name="description" content="Search among hundreds of movies!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <FavouriteProvider>
      <main className='w-screen h-screen overflow-scroll flex flex-col'>
        <Navbar />
        <div className='flex-1'><Component {...pageProps} /></div>
      </main>
    </FavouriteProvider>

  </>)
}