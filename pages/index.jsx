import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.hero}>

      <div className='relative flex flex-col gap-4 text-center'>
        <p className='text-zinc-400 text-lg md:text-2xl tracking-wider'>
          Search among hundreds of movies!
        </p>
        <h1 className='text-4xl sm:text-5xl md:text-6xl  font-semibold'>
          Don't regret your choice <br/>
          Check before you watch
        </h1>
        <h3 className='text-xl sm:text-2xl md:text-3xl'>
          Find the most important details and ratings <br />
          from biggest review-aggregation websites.
        </h3>

        <div className='flex justify-center items-center gap-5 sm:gap-10 mt-10'>
          <img src="/metacritic_short.png"  className='h-12 md:h-16 ' alt="Metacritic" />
          <img src="/rotten_tomatoes.png"   className='h-12 md:h-16 ' alt="Rotten Tomatoes" />
          <img src="/imdb.png"              className='h-12 md:h-16 ' alt="IMDb" />
        </div>

      </div>

    </div>
  )
}
