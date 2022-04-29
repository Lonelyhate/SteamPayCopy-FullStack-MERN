import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import './Header.scss'
import HeaderBurger from './HeaderBurger/HeaderBurger';

const Header: FC = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <Logo pr={20} height={42} width={195} />
                <HeaderBurger/>
            </div>
        </header>
    );
};

export default Header;
