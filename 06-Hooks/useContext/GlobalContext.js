import { createContext } from 'react'

const GlobalContext = createContext('Ash')
//now since we passed count,setCOunt in it so the string Ash will get replaced by it
export default GlobalContext

//e.g use case toglling theme dark and light
