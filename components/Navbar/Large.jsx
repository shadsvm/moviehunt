import Link from "next/link"
import {IoSearch, IoHeartOutline} from 'react-icons/io5'

export default function NavbarLarge ({input, setInput, onSubmit}) {

  return (
    <nav className="hidden sm:flex container mx-auto flex-row justify-evenly items-center gap-10 lg:gap-32 xl:gap-48 text-2xl text-white">
      <Link href='/'>
        <button className="font-bold tracking-wider">Movie<span className="text-orange-700">Hunt</span></button>
      </Link>

      <form onSubmit={e => onSubmit(e)} className='flex-1 flex justify-center items-center bg-neutral-700 rounded-full py-2 px-4 gap-4'>
        <input type="text" value={input} onInput={e => setInput(e.target.value)} className='flex-1 bg-inherit text-lg' placeholder='Search movie by title...' />
        <button type="submit"><IoSearch /></button>
      </form>

      <Link href='/favourite'>
        <button><IoHeartOutline /></button>
      </Link>
    </nav>
  )
}
