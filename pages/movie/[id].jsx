import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import LikeButton from "../../components/LikeButton"
import Loading from "../../components/Loading"
import Rating from "../../components/Rating"
import { IoTrophyOutline } from 'react-icons/io5'
import { BsDot } from 'react-icons/bs'

const MPARating = (rating) => {
  switch (rating) {
    case 'G': return 'text-green-500'
    case 'PG': return 'text-orange-500'
    case 'PG-13': return 'text-indigo-500'
    case 'R': return 'text-red-500'
    case 'NC-17': return 'text-blue-500'
    default: return 'error'
  }
}

export default function Movie() {

  const router = useRouter()
  const {id} = router.query
  
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if(!id) return
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(content => {
        if(content.Response == "False") throw Error(content.Error)
        setData(content)
        setLoading(false)
      })
      .catch(() => router.push('/error'))
      
  }, [id, router])
  
  
  if(loading) return <Loading />

  return data && (
    <main className="md:w-5/6 lg:w-2/3 mx-auto flex flex-col gap-5 py-10 px-5">
      
      <header className="flex flex-col">
        <h1 className="text-3xl font-semibold tracking-wide">{data.Title}</h1>
        <div className="flex items-center">{data.Year} <BsDot/> {data.Runtime} <BsDot/> <span className={MPARating(data.Rated)}>{data.Rated}</span></div>
      </header>
      
      <section className="grid grid-cols-3 gap-6">
        { data.Poster !== "N/A" && <img src={data.Poster} className="rounded-md sm:row-span-2" alt="Poster" />}
        { data.Plot !== "N/A" && <div className="col-span-2 ">{data.Plot}</div>}
        <div className="col-span-3 sm:col-span-2">
          <div><span className="text-neutral-500">Director</span> {data.Director}</div>
          <div><span className="text-neutral-500">Writers</span>  {data.Writer}</div>
          <div><span className="text-neutral-500">Stars</span>    {data.Actors}</div>
          <div className="mt-2"><span className="text-neutral-500">Genre</span>    {data.Genre}</div>
          <div><span className="text-neutral-500">Released</span> {data.Released}</div>
          <div><span className="text-neutral-500">Language</span> {data.Language}</div>
          <LikeButton id={data.imdbID} />
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-10">
        { data.Awards !== "N/A" && (
          <div className="flex flex-row items-center gap-3 text-lg">
            <IoTrophyOutline className="text-2xl text-yellow-500" /> {data.Awards}
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 text-xl">
          { data.Ratings && data.Ratings.map( rating => <Rating {...rating} key={rating.Source} />)}
        </div>
      </section>

    </main>
  )
}