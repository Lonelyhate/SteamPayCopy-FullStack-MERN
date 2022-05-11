import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchGarant } from '../../redux/actions/garant'
import Title from '../../shared/Title/Title'
import AdvantageItem from '../components/AdvantageItem/AdvantageItem'
import InfoMenu from '../components/InfoMenu/InfoMenu'
import './GarantPage.scss'

const GarantPage = () => {
    const dispatch = useDispatch()
    const {garants, loading} = useTypedSelector(state => state.garant)

    useEffect(() => {
        dispatch(fetchGarant())
    }, [])

  return (
    <div className='garant-page'>
        <div className="container garant-page__container">
            <Title title='Гарантии' />
            <div className="garant-page__content">
                <ul className="garant-page__list">
                    {garants.map(item => (
                        <li key={item._id} className="garant-page__item">
                            <AdvantageItem item={item} />
                        </li>
                    ))}
                </ul>
                <InfoMenu/>
            </div>
        </div>
    </div>
  )
}

export default GarantPage