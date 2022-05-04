import React, { FC, useEffect, useState } from 'react';
import Title from '../../shared/Title/Title';
import './AuthPage.scss';
import InputAuth from '../../shared/InputAuth/InputAuth';
import TitleAuth from '../../shared/TitleAuth/TitleAuth';
import emailSvg from '../../assets/img/email-orange.svg';
import passwordSvg from '../../assets/img/password-orange.svg';
import Button from '../../shared/Button/Button';
import { auth, loginUser } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../../utils/constsPath';
import Message from '../../shared/Message/Message';

const AuthPage: FC = () => {
    const { loading, error } = useTypedSelector((state) => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const isAuth = useTypedSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<string>('');
    const [visableMessage, setVisableMessage] = useState<boolean>(false)
    let registration = location.pathname === REGISTRATION_ROUTE ? true : false;

    const loginHandler = () => {
        if (email.length === 0 || password.length === 0) {
            setMessage('Заполните все поля');
            setVisableMessage(true)
        } else {
            dispatch(loginUser(email, password));
            setVisableMessage(true)
        }
    };

    useEffect(() => {
        if (!isAuth) {
            if (error) {
                setMessage(error)
            }
        }
    }, [error]);

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
                    <Message active={visableMessage} loading={loading} message={message} />
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
                    <Button
                        click={loginHandler}
                        width={330}
                        text={registration ? 'Зарегистрироваться' : 'Войти'}
                        background="orange"
                    />
                    <span className="auth-page__border"></span>
                    <TitleAuth
                        title={
                            registration ? 'Уже есть аккаунт STEAMPAY?' : 'Нет аккаунта STEAMPAY?'
                        }
                    />
                    <Button
                        click={toRegistrationClick}
                        width={330}
                        text={registration ? 'Войти' : 'Зарегистрироваться'}
                        background="blue"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
