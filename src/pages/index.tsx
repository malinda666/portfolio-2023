import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '@/components'

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <div className='relative h-[200vh]'>
          <h1 className='title text-9xl'>uncode</h1>
        </div>
      </Section>
    </>
  )
}

export default Home
