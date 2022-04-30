import React, { FC, useEffect, useState } from 'react';
import Title from '../../shared/Title/Title';
import './AuthPage.scss';
import InputAuth from '../../shared/InputAuth/InputAuth';
import TitleAuth from '../../shared/TitleAuth/TitleAuth';
import emailSvg from '../../assets/img/email-orange.svg';
import passwordSvg from '../../assets/img/password-orange.svg';
import Button from '../../shared/Button/Button';
import { auth, loginUser } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../../utils/constsPath';

const AuthPage: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuth = useTypedSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let registration = location.pathname === REGISTRATION_ROUTE ? true : false;

    const loginHandler = () => {
        dispatch(loginUser(email, password));
        navigate(PROFILE_ROUTE);
        if (isAuth) {
            navigate(PROFILE_ROUTE);
        }
    };

    const toRegistrationClick = () => {
        navigate(registration ? AUTH_ROUTE : REGISTRATION_ROUTE);
    };

    return (
        <div className="auth-page">
            <div className="container auth-page__container">
                <Title title="Личный кабинет" />
                <div className="auth-page__content">
                    <TitleAuth
                        title={
                            registration ? 'Создание аккаунта STEAMPAY' : 'Войти в аккаунт STEAMPAY'
                        }
                    />
                    <InputAuth
                        value={email}
                        type="email"
                        setData={setEmail}
                        placeholder={'Email'}
                        svg={emailSvg}
                    />
                    <InputAuth
                        value={password}
                        type="password"
                        placeholder="Пароль"
                        setData={setPassword}
                        svg={passwordSvg}
                    />
                    <Button click={loginHandler} width={330} text={registration ? 'Зарегистрироваться' : "Войти"} background="orange" />
                    <span className="auth-page__border"></span>
                    <TitleAuth title={registration ? "Уже есть аккаунт STEAMPAY?" : "Нет аккаунта STEAMPAY?"} />
                    <Button
                        click={toRegistrationClick}
                        width={330}
                        text={registration ? "Войти" : "Зарегистрироваться"}
                        background="blue"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
