import { FC, ReactNode, Ref } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Header from './Header'

interface LayoutProps {
  children: ReactNode
  containerRef: Ref<HTMLDivElement>
}

const Layout: FC<LayoutProps> = ({ children, containerRef }) => {
  return (
    <>
      <Head>
        <title>&mdash; UNCODE</title>
        <meta name='description' content='Generated by create next app' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Header />
      <main className='__layout'>
        <div className='' ref={containerRef} data-scroll-container>
          {children}
        </div>
      </main>
      {/* <Script src='../../../public/assets/Split3.min.js'></Script> */}
    </>
  )
}

export default Layout
