import React, { useState } from 'react';
import './HeaderBurger.scss';
import cn from 'classnames';
import { BurgerItemLink, BurgerItemName, BurgerMenu } from '../../../types/types';
import { Link } from 'react-router-dom';

const burgerMenu: BurgerMenu[] = [
    {
        name: BurgerItemName.HOME,
        link: BurgerItemLink.HOME,
    },
    {
        name: BurgerItemName.CATALOG,
        link: BurgerItemLink.CATALOG,
    },
    {
        name: BurgerItemName.DISCOUNT,
        link: BurgerItemLink.DISCOUNT,
    },
    {
        name: BurgerItemName.GUARANTEE,
        link: BurgerItemLink.GUARANTEE,
    },
    {
        name: BurgerItemName.SUPPORT,
        link: BurgerItemLink.SUPPORT,
    },
    {
        name: BurgerItemName.REVIEWS,
        link: BurgerItemLink.REVIEWS,
    },
    {
        name: BurgerItemName.BONUS_PROGRAM,
        link: BurgerItemLink.BONUS_PROGRAM,
    },
    {
        name: BurgerItemName.PERSONAL_AREA,
        link: BurgerItemLink.PERSONAL_AREA,
    },
];

const HeaderBurger = () => {
    const [headerActive, setHeaderActive] = useState<boolean>(false);

    return (
        <div className="header-burger">
            <button
                onClick={() => setHeaderActive(!headerActive)}
                className={cn('header-burger__btn', {
                    active: headerActive,
                })}>
                <span className="header-burger__line"></span>
                <span className="header-burger__cross"></span>
            </button>
            <nav className={cn('header-burger__mune burger-menu', {
                active: headerActive
            })}>
                <ul className="burger-menu__list">
                    {burgerMenu.map((item) => (
                        <li key={item.link} className="burger-menu__item">
                            <Link onClick={() => setHeaderActive(false)} className="burger-menu__link" to={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderBurger;
