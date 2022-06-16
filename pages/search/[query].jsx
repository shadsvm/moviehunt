import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Loading from '../../components/Loading'
import MovieMap from "../../components/MovieMap"

export default function Search() {

  const router = useRouter()
  const {query} = router.query
  // const searchQuery = query?.replace('+', ' ')

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!query) return
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${query.replace('+', ' ')}`)
      .then(res => res.json())
      .then(data => {
        setData(data.Search)
        setLoading(false)
      })
      .catch(() => router.push('/error'))
  }, [query, router])

  if(loading) return <Loading />

  return <MovieMap data={data} />
}