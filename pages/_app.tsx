import React from "react"
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }){
  return (
    <>
   
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>

    </>
  )
}

export default MyApp