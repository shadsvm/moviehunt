import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MdOutlineImageNotSupported } from 'react-icons/md'

const Movie = ({data}) => {
  const [loading, setLoading] = useState(true)
  const classCombo = (...classes) => classes.join(' ') 

  return (
    <Link key={data.imdbID} href={`/movie/${data.imdbID}`}>
      <div className="flex flex-col gap-3 cursor-pointer">

        <div className="rounded-md overflow-hidden aspect-w-3 aspect-h-5 ">

          { data.Poster === "N/A" ? 
            <div className="flex-1 flex justify-center items-center text-3xl bg-neutral-900 rounded-md"><MdOutlineImageNotSupported /></div> : 
          <Image 
            src={data.Poster} 
            alt="Poster"
            className={classCombo(
              'ease-in-out duration-700', 
              loading ? 'blur-md grayscale' : '')} 
  
            layout="fill"
            objectFit="cover"  
            onLoadingComplete={() => setLoading(false)}
          />
          }
        </div>

        <h3 className="text-center text-lg">{data.Title}</h3>

      </div>
    </Link>
  )
}

export default Movie