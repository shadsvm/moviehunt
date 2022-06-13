import Small from './Small'
import Large from './Large'
import { useState } from 'react'
import { useRouter } from 'next/router'


export default function Navbar() {

  const [input, setInput] = useState('')
  const router = useRouter()

  const submitSearch = (e) => {
    e.preventDefault()
    if (!input) return
    router.push('/search/'+input.replace(' ', '+'))
    setInput('')
  }

  return (
    <div className="w-full bg-neutral-900 p-4">
      <Small input={input} setInput={setInput} onSubmit={submitSearch} /> 
      <Large input={input} setInput={setInput} onSubmit={submitSearch} />
    </div>
  )
}
