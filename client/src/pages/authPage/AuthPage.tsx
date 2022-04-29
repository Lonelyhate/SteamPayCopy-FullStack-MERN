import React, { FC, useEffect, useState } from 'react';
import Title from '../../shared/Title/Title';
import './AuthPage.scss';
import InputAuth from './components/InputAuth/InputAuth';
import TitleAuth from './components/TitleAuth/TitleAuth';
import emailSvg from '../../assets/img/email-orange.svg';
import passwordSvg from '../../assets/img/password-orange.svg';
import Button from '../../shared/Button/Button';
import { auth, loginUser } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../utils/constsPath';


const AuthPage: FC = () => {
    const navigate = useNavigate()
    const isAuth = useTypedSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const loginHandler = () => {
        dispatch(loginUser(email, password))
        navigate(PROFILE_ROUTE)
        if(isAuth) {
            navigate(PROFILE_ROUTE)
        }
    }
    

    console.log(isAuth)

    return (
        <div className="auth-page">
            <div className="container">
                <Title title="Личный кабинет" />
                <div className="auth-page__content">
                    <TitleAuth title="Войти в аккаунт STEAMPAY" />
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
                    <Button click={loginHandler}  width={330} text="Войти" background="orange" />
                    <span className="auth-page__border"></span>
                    <TitleAuth title="Нет аккаунта STEAMPAY?" />
                    <Button width={330} text="Зарегистрироваться" background="blue" />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
