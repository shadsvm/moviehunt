import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useFavourite } from "../contexts/Favourite"
import Loading from '../components/Loading'
import MovieMap from "../components/MovieMap"

export default function Favourite() {

  const router = useRouter()
  const {favourite, setFavourite} = useFavourite() 

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (!favourite) return
    setLoading(true)
    for (let id of favourite){
      fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(content => {
          let movieData = {
            Title: content.Title,
            Poster: content.Poster,
            imdbID: id
          }
          setData(prev => {
            if (prev && prev.find(movie => movie.imdbID === id)) return [...prev]
            else return [...prev, movieData]
          })
        })
        .catch(() => router.push('/error') )
    }
    setLoading(false)
      
  }, [favourite, router])
  
  
  if(loading) return <Loading />

  return favourite.length > 0 ? <MovieMap data={data} /> : <div className="h-full flex justify-center items-center text-xl">You have not liked anything.</div>
}