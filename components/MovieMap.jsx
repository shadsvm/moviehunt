import Movie from './Movie'

export default function MovieMap({data}){

  return data.length > 0 && (
    <div className="container mx-auto py-10 px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      { data.map(item => <Movie key={item.imdbID} data={item} /> ) }
    </div>
  )
}