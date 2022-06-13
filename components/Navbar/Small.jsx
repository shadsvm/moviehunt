import Link from 'next/link'
import { useState } from 'react'
import {IoClose, IoSearch, IoHeartOutline} from 'react-icons/io5'

export default function NavbarSmall ({input, setInput, onSubmit}) {

  const [showSearch, setShowSearch] = useState(false)
  const submit = (e) => {
    setShowSearch(false)
    onSubmit(e)
  }

  return (
    <nav className="sm:hidden container mx-auto flex flex-row justify-between items-center text-xl text-white">
      { showSearch ? (

        <form className='flex-1 flex items-center' onSubmit={submit}>
          <input 
            type="text" 
            className='w-full bg-inherit text-xl'  
            value={input} 
            placeholder='Search...' 
            onInput={e => setInput(e.target.value)} 
          />
          <div className="flex gap-5">
            <button type='submit'><IoSearch /></button>
            <button type='button' onClick={() => setShowSearch(false)}><IoClose /></button>
          </div>
        </form>
        
      ):(<>

        <Link href='/' >
          <button className="font-bold tracking-wider">Movie<span className="text-orange-700">Hunt</span></button>
        </Link>

        <div className="flex flex-row justify-center items-center gap-5">
          <button onClick={() => setShowSearch(true)}><IoSearch /></button>
          <Link href='/favourite'><button><IoHeartOutline /></button></Link>
        </div>

      </>)}
    </nav>
  )
}
