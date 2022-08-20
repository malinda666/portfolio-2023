import { FC } from 'react'

interface ArrowProps {
  isUp?: boolean
}

const Arrow: FC<ArrowProps> = ({ isUp }) => {
  return (
    <svg
      width='100'
      height='267'
      viewBox='0 0 100 267'
      style={{ transform: isUp ? '' : 'rotate(180deg)' }}
    >
      <path d='M49.894 2.766v262.979' strokeLinecap='square'></path>
      <path
        fill='none'
        d='M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596'
      ></path>
    </svg>
  )
}

export default Arrow
