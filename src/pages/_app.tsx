import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRef, MutableRefObject } from 'react'
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/router'

import Layout from '@/components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const scrollRef = useRef(null) as MutableRefObject<HTMLDivElement | null>
  const { asPath } = useRouter()
  return (
    <RLSProvider
      options={{
        smooth: true,
        lerp: 0.12,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={scrollRef}
    >
      <Layout containerRef={scrollRef}>
        <Component {...pageProps} />
      </Layout>
    </RLSProvider>
  )
}
export default MyApp
