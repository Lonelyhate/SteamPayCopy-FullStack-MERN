import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { addGarant, fetchGarant, removeGarant } from '../../../../redux/actions/garant';
import Title from '../../../../shared/Title/Title';
import { AiFillPlusCircle } from 'react-icons/ai';
import ItemControl from '../ItemControl/ItemControl';
import ModalControl from '../ModalControl/ModalControl';
import './GarantControl.scss'

const GarantControl: FC = () => {
    const dispatch = useDispatch();
    const { garants } = useTypedSelector((state) => state.garant);
    const [titleGarant, setTitleGarant] = useState<string>('');
    const [descriptionGarant, setDescriptionGarant] = useState<string>('');
    const [imgGarant, setImgGarant] = useState<any>(null);
    const [visableModal, setVisableModal] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchGarant())
    }, []);

    const fetchGarantAdd = () => {
        dispatch(addGarant(titleGarant, descriptionGarant, imgGarant));
        setTitleGarant('');
        setDescriptionGarant('');
        setVisableModal(false);
        setImgGarant(null);
    };

    return (
        <div className="garant-control">
            <Title title="Гарантии" />
            <button onClick={() => setVisableModal(true)} className="garant-control__add">
                <AiFillPlusCircle /> Добавить
            </button>
            <div className="garant-control__content">
                <div className="garant-control__header garant-header">
                    <button className="garant-header__btn">Заголовок</button>
                    <button className="garant-header__btn">Картинка</button>
                    <button className="garant-header__btn">Описание</button>
                    <button className="garant-header__btn">Создано</button>
                </div>
                <ul className="garant-control__list">
                    {garants.map((item) => (
                        <ItemControl key={item._id} item={item} removeItem={removeGarant} />
                    ))}
                </ul>
            </div>
            <ModalControl
                visable={visableModal}
                setVisable={setVisableModal}
                description={descriptionGarant}
                setDescription={setDescriptionGarant}
                fetchAdd={fetchGarantAdd}
                setImg={setImgGarant}
                setTitle={setTitleGarant}
                title={titleGarant}
            />
        </div>
    );
};

export default GarantControl;
