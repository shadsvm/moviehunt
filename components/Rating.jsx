import Image from "next/image"

const SourceToImage = (source) => {
  switch (source) {
    case "Internet Movie Database": return '/imdb.png'
    case "Rotten Tomatoes": return '/rotten_tomatoes.png'
    case "Metacritic": return '/metacritic_short.png'
  }
}

export default function Rating({Source, Value}) {
  return (
    <div className="flex flex-row items-center justify-center gap-3 ">
      <div className="w-24 h-8 relative">
        <Image layout="fill" objectFit="contain" src={SourceToImage(Source)} alt="imdb" /> 
      </div>
      <div className="flex-1">{Value}</div>
    </div>
  )
}