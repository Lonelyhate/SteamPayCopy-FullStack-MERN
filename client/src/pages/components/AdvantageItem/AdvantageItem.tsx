import React, { FC } from 'react';
import './AdvantageItem.scss'
import { IControlItem } from '../../../types/types';

interface AdvantageItemProps {
    item: IControlItem;
}

const AdvantageItem: FC<AdvantageItemProps> = ({ item }) => {
    return (
        <article className="advantage-item">
            <div className="advantage-item__img">
                <img src={`http://localhost:5000/${item.image}`} alt="message" />
            </div>
            <div className="Advantage__text">
                <h3 className="advantage-item__title">{item.title}</h3>
                <p className="advantage-item__description">{item.description}</p>
            </div>
        </article>
    );
};

export default AdvantageItem;