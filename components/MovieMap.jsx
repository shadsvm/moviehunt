import Link from "next/link"
import { MdOutlineImageNotSupported } from 'react-icons/md'

export default function MovieMap({data}){

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