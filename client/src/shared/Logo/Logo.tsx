import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/img/logo.svg'
import { HOME_ROTE } from '../../utils/constsPath'
import './Logo.scss'

interface LogoProps {
    width: number
    height: number
    pr?: number
}

const Logo:FC<LogoProps> = ({height, width, pr}) => {
  return (
    <Link to={HOME_ROTE} className='logo'>
        <img style={{height: height, width: width, paddingRight: pr}} src={logoImg} alt="logo" />
    </Link>
  )
}

export default Logo