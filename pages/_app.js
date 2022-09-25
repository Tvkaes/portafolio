/* eslint-disable react/jsx-no-undef */
import React,{Component} from 'react'
import '../styles/globals.css'
import Head from 'next/head';


export default function MyApp(props) {

  const {Component,pageProps} = props

  const wrappedComponent = Component.Layout ? (
    <Component.Layout>
      <Component {...pageProps} />
    </Component.Layout>
  ) : (
    <Component {...pageProps} />
  )

  return(
    <React.Fragment>
      <Head>
      <title>Tvkaes Portafolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {wrappedComponent}
    </React.Fragment>
  )
  
}


