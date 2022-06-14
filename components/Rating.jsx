const SourceToImage = (source) => {
  switch (source) {
    case "Internet Movie Database": return '/imdb.png'
    case "Rotten Tomatoes": return '/rotten_tomatoes.png'
    case "Metacritic": return '/metacritic_short.png'
  }
}

export default function Rating({Source, Value}) {
  return (
    <div className="flex flex-row items-center gap-5">
      <img src={SourceToImage(Source)} alt="imdb" className="h-8" /> 
      {Value}
    </div>
  )
}