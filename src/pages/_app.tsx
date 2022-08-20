import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRef, MutableRefObject, useEffect } from 'react'
import {
  LocomotiveScrollProvider as RLSProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll'
import { useRouter } from 'next/router'
import { gsap } from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import Layout from '@/components/layout'

gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el

      scroll.on('scroll', () => {
        ScrollTrigger.update()
        ScrollTrigger.refresh()
      })
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: element.style.transform ? 'transform' : 'fixed',
      })
    }

    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update())
      ScrollTrigger.refresh()
    }
  }, [scroll])

  return null
}

function MyApp({ Component, pageProps }: AppProps) {
  const scrollRef = useRef(null) as MutableRefObject<HTMLDivElement | null>
  const { asPath } = useRouter()
  return (
    <RLSProvider
      options={{
        smooth: true,
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
      <ScrollTriggerProxy />
      <Layout containerRef={scrollRef}>
        <Component {...pageProps} />
      </Layout>
    </RLSProvider>
  )
}
export default MyApp
