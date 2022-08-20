import { FC, useRef, useEffect, MutableRefObject, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import { projectData } from '@/data/project_data'
import { Title } from '@/components'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const Projects: FC = () => {
  const { scroll } = useLocomotiveScroll()
  const titleWrapper = useRef() as MutableRefObject<HTMLDivElement>
  const titleWrapperTrigger = useRef() as MutableRefObject<HTMLDivElement>

  const [activeSlide, setActiveSlide] = useState<number>(0)

  useEffect(() => {
    gsap.to(titleWrapper.current, {
      y: -100 * activeSlide,
      duration: 1.25,
      ease: 'expo.out',
    })
  }, [activeSlide])

  useEffect(() => {
    if (!scroll) return
    scroll.on('call', (value: string, way: string, obj: any) => {
      if (value === 'getSectionIdx') {
        if (way === 'enter') {
          const activeItem = obj?.el.id
          setActiveSlide(activeItem)
        }
      }
    })
  }, [scroll])

  // const getSectionIdx = () => {
  //   console.log('scroll')
  // }

  return (
    <div className='relative w-full h-screen grid grid-cols-2 align-middle'>
      <div
        className='relative flex h-screen flex-col items-center justify-center p-4'
        data-scroll
        data-scroll-sticky
        data-scroll-target='#pin-section'
      >
        <div className='absolute w-full h-[100px] overflow-hidden flex items-start justify-center'>
          <div
            className='relative w-max h-auto flex flex-col items-center justify-start pt-[100px]'
            ref={titleWrapper}
          >
            {projectData.map((project, i) => (
              <div className='relative w-full h-[100px]' key={project.id}>
                <span className='relative font-title2 text-[5rem]'>
                  {project.project_name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className='relative flex flex-col items-center justify-center p-4'
        ref={titleWrapperTrigger}
      >
        {/* <div className='relative w-full flex items-center justify-center h-screen bg-third'>
          right one
        </div>
        <div className='relative w-full flex items-center justify-center h-screen bg-accent'>
          right two
        </div> */}
        {projectData.map((project) => (
          <div
            className='relative w-full flex items-center justify-center h-screen bg-accent'
            key={project.id}
            id={project.id.toString()}
            data-scroll
            data-scroll-call='getSectionIdx'
            data-scroll-repeat
            data-scroll-offset='300'
          >
            <Image
              src={project.project_image}
              alt='project'
              layout='fill'
              className='w-full h-full object-fit'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
