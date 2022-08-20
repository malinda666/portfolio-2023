import { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

interface TitleProps {
  text: string
  size?: string
  type?: string
  cls?: string
}

gsap.registerPlugin(ScrollTrigger)

const Title: FC<TitleProps> = ({
  text,
  size = 'base',
  type = 'normal',
  cls = '',
}) => {
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>

  useEffect(() => {
    const chars = gsap.utils.selector(titleRef.current)('span')
    gsap.from(chars, {
      y: '105%',
      duration: 1.25,
      ease: 'expo.out',
      delay: type === 'header' ? 1 : 0.2,
      stagger: { amount: 0.35, from: 'random' },
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [type])

  const getSize = (size: string) => {
    let _size

    switch (size) {
      case 'base':
        _size = 'title-base'
        break
      case 'md':
        _size = 'title-md'
        break
      case 'lg':
        _size = 'title-lg'
        break
      case 'xl':
        _size = 'title-xl'
        break

      default:
        _size = 'title-base'
        break
    }

    return _size
  }
  const getType = (type: string) => {
    let _type

    switch (type) {
      case 'normal':
        _type = 'title-normal'
        break
      case 'italic':
        _type = 'title-italic'
        break

      default:
        _type = 'title-base'
        break
    }

    return _type
  }

  return (
    <h1
      aria-label={text.toLocaleLowerCase()}
      className={['title px-2', cls, getSize(size), getType(type)].join(' ')}
      ref={titleRef}
    >
      {text.split('').map((char, i) => (
        <span
          key={i.toString() + char}
          className='relative inline-block whitespace-pre'
        >
          {char}
        </span>
      ))}
    </h1>
  )
}

export default Title
