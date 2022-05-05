import React, { FC } from 'react';
import { IPartnerItem } from '../../../../types/types';
import './PartnerItemAdmin.scss';

interface PartnerItemProps {
    item: IPartnerItem;
}

const PartnerItemAdmin: FC<PartnerItemProps> = ({ item }) => {
    return (
        <li className="partner-item-admin">
            <h3 className="partner-item-admin__title">{item.title}</h3>
            <div className="partner-item-admin__img">
                <img src={`http://localhost:5000/${item.image}`} alt={item.title} />
            </div>
            <p className="partner-item-admin__descr">{item.description}</p>
            <time>{item.date}</time>
            <div className="partner-item-admin__btns">
                <button className="partner-item-admin__edit">Edit</button>
                <button className="partner-item-admin__delete">Delete</button>
            </div>
        </li>
    );
};

export default PartnerItemAdmin;
