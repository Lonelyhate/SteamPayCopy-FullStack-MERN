import React, { FC } from 'react';
import './Partner.scss';
import msgSvg from '../../../../../assets/img/messages.svg';
import { IControlItem } from '../../../../../types/types';

interface PartnerItemProps {
    item: IControlItem;
}

const PartnerItem: FC<PartnerItemProps> = ({ item }) => {
    return (
        <article className="partner-item">
            <div className="partner-item__img">
                <img src={`http://localhost:5000/${item.image}`} alt="message" />
            </div>
            <div className="partner__text">
                <h3 className="partner-item__title">{item.title}</h3>
                <p className="partner-item__description">{item.description}</p>
            </div>
        </article>
    );
};

export default PartnerItem;
