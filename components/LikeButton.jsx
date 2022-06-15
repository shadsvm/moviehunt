import { useMemo } from 'react'
import { IoHeartOutline} from 'react-icons/io5'
import { useFavourite } from '../contexts/Favourite'

export default function LikeButton({id}) {

  const {favourite, setFavourite} = useFavourite()
  const isActive = useMemo(() => favourite.includes(id), [favourite])
  const activeClass = isActive ? 'bg-orange-600 border-orange-600 text-white ' : 'hover:border-orange-600 hover:text-orange-600'

  const handleLike = () => {
    if (!favourite) setFavourite([id])
    else if (isActive) setFavourite(favourite.filter(item => item !== id))
    else setFavourite([...favourite, id])
  }
  
  return(
    <button onClick={handleLike} className={`${activeClass} mt-5 border p-2 rounded-full transition duration-300 `}>
      <IoHeartOutline className="text-2xl" />
    </button>
  )
}