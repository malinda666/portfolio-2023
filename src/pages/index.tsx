import type { NextPage } from 'next'

import { Section, Title, Paragraph, Arrow } from '@/components'
import Projects from '@/containers/Projects'

import { projectData } from '@/data/project_data'

const Home: NextPage = () => {
  const projectsCls = `!h-[${projectData.length - 1}00vh] !items-start`

  return (
    <>
      <Section>
        <div className='relative hero-grid'>
          <Title text='UncodE' size='xl' cls='hero-title' />
          <Paragraph
            align='left'
            isHeader
            wrapperCls='hero-para flex items-end'
            innerCls='max-w-md'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            cupiditate itaque corrupti nesciunt voluptates perferendis minima
            repellendus optio eos cum accusamus ea minus inventore pariatur
            saepe fugit officia, dignissimos vel.
          </Paragraph>
          <div
            className='relative flex items-end justify-end text-light stroke-light hero-scroller'
            data-scroll
            data-scroll-speed='2'
          >
            <Arrow />
          </div>
        </div>
      </Section>

      {/* <Section isLight>
        <div className='relative'>
          <Paragraph
            align='left'
            wrapperCls='hero-para flex items-end'
            innerCls='leading-none max-w-5xl'
            size='lg'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            cupiditate itaque corrupti nesciunt voluptates perferendis minima
            repellendus optio eos cum accusamus ea minus inventore pariatur
            saepe fugit officia, dignissimos vel.
          </Paragraph>
        </div>
      </Section> */}

      <Section cls='!items-start !h-[500vh]' id='pin-section'>
        <Projects />
      </Section>
      <Section>
        <div className='relative'>
          <Title text='Contact uS' size='lg' />
        </div>
      </Section>
    </>
  )
}

export default Home
