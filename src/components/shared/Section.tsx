import { FC, ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  isLight?: boolean
  cls?: string
  size?: string
  id?: string
}

const Section: FC<SectionProps> = ({
  children,
  isLight = false,
  cls = '',
  size = '',
  id = '',
}) => {
  const getSize = (size: string) => {
    let _sizeCls

    switch (size) {
      case 'sm':
        _sizeCls = 'h-full'
        break
      case 'md':
        _sizeCls = 'h-[100vh]'
        break
      case 'lg':
        _sizeCls = 'h-[120vh]'
        break
      case 'xl':
        _sizeCls = 'h-[150vh]'
        break

      default:
        _sizeCls = 'h-auto'
        break
    }

    return _sizeCls
  }
  return (
    <section
      data-scroll-section
      className={[
        'relative flex items-center justify-center',
        size ? getSize(size) : getSize('md'),
        cls,
        isLight ? 'section-light' : 'section-dark',
      ].join(' ')}
      id={id || ''}
    >
      {children}
    </section>
  )
}

export default Section
