import { FC, MutableRefObject, ReactNode, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// @ts-ignore
import SplitText from '@/public/assets/Split3.min.js'

interface ParagraphProps {
  children: ReactNode
  align?: string
  wrapperCls?: string
  innerCls?: string
  isHeader?: boolean
  size?: string
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  align,
  size = 'base',
  wrapperCls = '',
  innerCls = '',
  isHeader = false,
}) => {
  const paraRef = useRef() as MutableRefObject<HTMLParagraphElement>

  useEffect(() => {
    const split = new SplitText(paraRef.current, {
      type: 'lines',
    })

    console.log(split)

    gsap.from(split.lines, {
      opacity: 0,
      y: '80%',
      duration: 0.7,
      ease: 'expo.out',
      delay: isHeader ? 1 : 0.5,
      stagger: { amount: 0.45, from: 'start' },
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  const getAlign = (align: string) => {
    let _align = ''

    switch (align) {
      case 'center':
        _align = 'text-center'
        break
      case 'left':
        _align = 'text-left'
        break
      case 'right':
        _align = 'text-right'
        break

      default:
        _align = 'text-center'
        break
    }

    return _align
  }
  const getSize = (size: string) => {
    let _size

    switch (size) {
      case 'base':
        _size = 'para-base'
        break
      case 'md':
        _size = 'para-md'
        break
      case 'lg':
        _size = 'para-lg'
        break
      case 'xl':
        _size = 'para-xl'
        break

      default:
        _size = 'para-base'
        break
    }

    return _size
  }

  return (
    <div className={['paragraph', wrapperCls, getAlign(align || '')].join(' ')}>
      <p
        className={['relative', innerCls, getSize(size)].join(' ')}
        ref={paraRef}
      >
        {children}
      </p>
    </div>
  )
}

export default Paragraph
