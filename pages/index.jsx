import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.hero}>

      <div className='relative flex flex-col gap-4 text-center'>
        <p className='text-zinc-400 text-sm xs:text-lg md:text-2xl tracking-wider'>
          Search among hundreds of movies!
        </p>
        <h1 className='text-2xl xs:text-3xl sm:text-5xl md:text-6xl  font-semibold'>
          Don&apos;t regret your choice <br/>
          Check before you watch
        </h1>
        <h3 className='test-md xs:text-xl sm:text-2xl md:text-3xl'>
          Find informations and ratings from <br />
          biggest review-aggregation websites.
        </h3>

        <div className='flex justify-center items-center mt-10 h-12 md:h-16 '>

          <div className='h-full relative flex-1' >
            <Image layout='fill' objectFit='contain' src="/rotten_tomatoes.png" alt="Rotten Tomatoes" />
          </div>

          <div className='h-full relative flex-1' >
            <Image layout='fill' objectFit='contain' src="/metacritic_short.png" alt="Metacritic" />
          </div>
          

          <div className='h-full relative flex-1' >
            <Image layout='fill' objectFit='contain' src="/imdb.png" alt="IMDB" />
          </div>
                    
        </div>

      </div>

    </div>
  )
}
