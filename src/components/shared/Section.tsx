import { FC, ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section data-scroll-section className=''>
      {children}
    </section>
  )
}

export default Section
