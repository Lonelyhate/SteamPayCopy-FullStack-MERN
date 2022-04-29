import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './HomePage.scss'

const HomePage:FC = () => {
    const {currentUser} = useTypedSelector(state => state.user)
    console.log(currentUser)
  return (
    <div>HomePage</div>
  )
}

export default HomePage