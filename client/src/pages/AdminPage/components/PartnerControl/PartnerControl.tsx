import React, { FC, useEffect, useState } from 'react';
import Title from '../../../../shared/Title/Title';
import './PartnerControl.scss';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { addPartner, fetchPartners, removePartners } from '../../../../redux/actions/partner';
import ModalControl from '../ModalControl/ModalControl';
import ItemControl from '../ItemControl/ItemControl';

const PartnerControl: FC = () => {
    const dispatch = useDispatch();
    const { partners } = useTypedSelector((state) => state.partner);
    const [visableModal, setVisableModal] = useState<boolean>(false);
    const [title, setTitle] = useState<any>('');
    const [description, setDescription] = useState<any>('');
    const [img, setImg] = useState<any>(null);

    const fetchAddPartner = () => {
        dispatch(addPartner(title, description, img));
        setDescription('');
        setTitle('');
        setImg(null);
        setVisableModal(false);
    };

    useEffect(() => {
        dispatch(fetchPartners());
    }, []);

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
                    {partners.map((item) => (
                        <ItemControl key={item._id} item={item} removeItem={removePartners} />
                    ))}
                </ul>
            </div>
            <ModalControl
                visable={visableModal}
                setVisable={setVisableModal}
                description={description}
                setDescription={setDescription}
                fetchAdd={fetchAddPartner}
                setImg={setImg}
                setTitle={setTitle}
                title={title}
            />
        </div>
    );
};

export default PartnerControl;
