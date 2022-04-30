import React, { useState } from 'react';
import Avatar from '../../shared/Avatar/Avatar';
import Title from '../../shared/Title/Title';
import './ProfilePage.scss';
import uploadSvg from '../../assets/img/upload.svg';
import TitleAuth from '../../shared/TitleAuth/TitleAuth';
import InputAuth from '../../shared/InputAuth/InputAuth';
import Button from '../../shared/Button/Button';
import passwordSvgOrange from '../../assets/img/password-orange.svg';
import passwordSvgBlue from '../../assets/img/password-blue.svg';
import emailSvg from '../../assets/img/email-orange.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ProfilePage = () => {
    const { currentUser } = useTypedSelector((state) => state.user);
    const [nickname, setNickname] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmedEmail, setConfirmedEmail] = useState<string>('');

    return (
        <section className="profile-page">
            <div className="container">
                <Title title="Личный кабинет" />
                <div className="profile-page__content">
                    <div className="profile-page__left">
                        <div className="profile-page__top">
                            <div className="profile-page__avatar">
                                <Avatar height={150} width={150} />
                                <label className="profile-page__label-upload" htmlFor="avatar">
                                    <img src={uploadSvg} alt="upload" /> Изменить аватар
                                </label>
                                <input
                                    className="profile-page__upload-input"
                                    id="avatar"
                                    type="file"
                                    placeholder="Изменить автар"
                                />
                            </div>
                            <div className="profile-page__nickname">
                                <TitleAuth title="Изменить никнейм" />
                                <InputAuth
                                    value={nickname}
                                    placeholder="Введите новый никнейм"
                                    type="text"
                                    setData={setNickname}
                                />
                                <Button text="Изменить никнейм" background="blue" width={330} />
                            </div>
                        </div>
                        <div className="profile-page__bottom">
                            <div className="profile-page__password">
                                <TitleAuth title="Изменить пароль" />
                                <InputAuth
                                    value={oldPassword}
                                    setData={setOldPassword}
                                    type="password"
                                    svg={passwordSvgOrange}
                                    placeholder="Старый пароль"
                                />
                                <InputAuth
                                    value={newPassword}
                                    setData={setNewPassword}
                                    type="password"
                                    svg={passwordSvgBlue}
                                    placeholder="Новый пароль пароль"
                                />
                                <InputAuth
                                    value={confirmedPassword}
                                    setData={setConfirmedPassword}
                                    type="password"
                                    svg={passwordSvgBlue}
                                    placeholder="Подтвердите новый пароль"
                                />
                                <Button background='blue' text='Изменить пароль' width={330} />
                            </div>
                            <div className="profile-page__email">
                                <TitleAuth title="Изменить email" />
                                <p className="profile-page__text">
                                    Ваш email: {currentUser?.email}
                                </p>
                                <InputAuth
                                    placeholder="Email"
                                    setData={setEmail}
                                    type="email"
                                    value={email}
                                    svg={emailSvg}
                                />
                                <InputAuth
                                    placeholder="Подтвердите Email"
                                    setData={setConfirmedEmail}
                                    type="email"
                                    value={confirmedEmail}
                                    svg={emailSvg}
                                />
                                <Button background='blue' text='Изменить email' width={330} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
