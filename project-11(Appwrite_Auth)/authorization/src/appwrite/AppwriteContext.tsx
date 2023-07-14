
import React, { FC, PropsWithChildren, createContext, useState } from 'react'
import Appwrite from './service'

//defining type for context
type AppContextType = {
    appwrite: Appwrite,
    isLoggedIn: boolean,
    setIsLoggedIn:(isLoggedIn:boolean)=>void
}

//create a context
export const AppwriteContext = createContext<AppContextType>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn:()=>{}
})

export const AppwriteProvider:FC<PropsWithChildren> = ({children}) => {

   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const defaultValue = {
        appwrite: new Appwrite(),
        isLoggedIn,
        setIsLoggedIn,
   }

  return (
    <AppwriteContext.Provider value={defaultValue}>
     {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext