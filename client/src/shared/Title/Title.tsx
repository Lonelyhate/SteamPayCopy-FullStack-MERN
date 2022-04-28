import React, { FC } from 'react'

interface TitleProps {
    title: string
}

const Title:FC<TitleProps> = ({title}) => {
  return (
    <h1 className='title'>{title}</h1>
  )
}

export default Title