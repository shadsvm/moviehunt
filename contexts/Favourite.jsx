import { createContext, useContext, useEffect, useState } from "react";

const FavouriteContext = createContext()


export const FavouriteProvider = ({children}) => {

  const [favourite, setFavourite] = useState(() => {
    if(typeof window !== "undefined") 
    return JSON.parse(localStorage.getItem('favourite')) || []
  })

  useEffect(() => {
    localStorage.setItem('favourite', JSON.stringify(favourite))
  }, [favourite])

  return (
    <FavouriteContext.Provider value={{favourite, setFavourite}}>
      {children}
    </FavouriteContext.Provider>
  )
}

export const useFavourite = () => {
  const context = useContext(FavouriteContext)
  if(context === undefined) return console.warn('Context must be used within the provider!');
  return context
}