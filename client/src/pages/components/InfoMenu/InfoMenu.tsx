import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { InfoMenuAr, InfoMenuLink, InfoMenuName } from '../../../types/types';
import './InfoMenu.scss';

const menu: InfoMenuAr[] = [
    {
        name: InfoMenuName.DISCOUNT,
        link: InfoMenuLink.DISCOUNT,
    },
    {
        name: InfoMenuName.REVIEWS,
        link: InfoMenuLink.REVIEWS,
    },
    {
        name: InfoMenuName.GARANT,
        link: InfoMenuLink.GARANT,
    },
    {
        name: InfoMenuName.PARTNER,
        link: InfoMenuLink.PARTNER,
    },
];

const InfoMenu: FC = () => {
    return (
        <aside className='info-menu'>
            <ul className="info-menu__list">
                {menu.map((item) => (
                    <li key={item.link} className="info-menu__item">
                        <Link className="info-menu__link" to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default InfoMenu;
