import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MdOutlineImageNotSupported } from 'react-icons/md'
import Loading from '../../components/Loading'

export default function Search() {

  const router = useRouter()
  const {query} = router.query
  // const searchQuery = query?.replace('+', ' ')

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!query) return
    setLoading(true)
    fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${query.replace('+', ' ')}`)
      .then(res => res.json())
      .then(data => {
        setData(data.Search)
        setLoading(false)
      })
      .catch(e => console.log('Something went wrong!', e))
  }, [query])

  if(loading) return <Loading />

  return data.length > 0 && (
    <div className="container mx-auto py-10 px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      { data.map(item => (
        <Link key={item.imdbID} href={`/movie/${item.imdbID}`}>
        <div className="flex flex-col justify-between gap-2 cursor-pointer">

          { item.Poster === "N/A" ? 
            <div className="flex-1 flex justify-center items-center text-3xl bg-neutral-800 rounded-md"><MdOutlineImageNotSupported /></div> : 
            <img src={item.Poster} className="rounded-md" alt="Poster" />
          }
          <div className="text-center">{item.Title}</div>

        </div>
        </Link>
      )) }

    </div>
  )
}