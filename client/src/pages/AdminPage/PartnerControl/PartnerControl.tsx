import React, { FC, useEffect, useState } from 'react';
import Title from '../../../shared/Title/Title';
import './PartnerControl.scss';
import { AiFillPlusCircle } from 'react-icons/ai';
import PartnerModal from './PartnerModal/PartnerModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import PartnerItemAdmin from './PartnerItemAdmin/PartnerItemAdmin';
import { useDispatch } from 'react-redux';
import { fetchPartners } from '../../../redux/actions/partner';

const PartnerControl: FC = () => {
    const dispatch = useDispatch()
    const {partners} = useTypedSelector(state => state.partner)
    const [visableModal, setVisableModal] = useState<boolean>(false)

    useEffect(() => {
        dispatch(fetchPartners())
    }, [])

    return (
        <div className="partner-control">
            <Title title="Партнерская прогрмма" />
            <button onClick={() => setVisableModal(true)} className="partner-control__add">
                <AiFillPlusCircle /> Добавить
            </button>
            <div className="partner-control__content">
                <div className="partner-control__header partner-header">
                    <button className="partner-header__btn">Заголовок</button>
                    <button className="partner-header__btn">Картинка</button>
                    <button className="partner-header__btn">Описание</button>
                    <button className="partner-header__btn">Создано</button>
                </div>
                <ul className="partner-control__list">
                    {partners.map(item => (
                        <PartnerItemAdmin key={item.id} item={item} />
                    ))}
                </ul>
            </div>
            <PartnerModal visable={visableModal} setVisable={setVisableModal} />
        </div>
    );
};

export default PartnerControl;
