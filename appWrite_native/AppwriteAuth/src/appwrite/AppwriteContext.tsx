import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'
import AppwriteService from './service'

type AppContextType = {
    appwriteService: AppwriteService;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn:boolean)=> void
}

//creating a context
export const AppwriteContext = createContext<AppContextType>({
    appwriteService: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

//Creating a provider
export const AppwriteProvider:FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const defaultValue = {
        appwriteService: new AppwriteService(),
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