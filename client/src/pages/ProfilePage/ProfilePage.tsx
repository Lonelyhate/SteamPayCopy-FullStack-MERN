import React, { useState } from 'react';
import Avatar from '../../shared/Avatar/Avatar';
import Title from '../../shared/Title/Title';
import './ProfilePage.scss';
import uploadSvg from '../../assets/img/upload.svg';
import TitleAuth from '../../shared/TitleAuth/TitleAuth';
import InputAuth from '../../shared/InputAuth/InputAuth';
import Button from '../../shared/Button/Button';
import passwordSvg from '../../assets/img/password-orange.svg';

const ProfilePage = () => {
    const [nickname, setNickname] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    

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
                                    svg={passwordSvg}
                                    placeholder="Старый пароль"
                                />
                                <InputAuth
                                    value={newPassword}
                                    setData={setNewPassword}
                                    type="password"
                                    svg={passwordSvg}
                                    placeholder="Новый пароль пароль"
                                />
                                <InputAuth
                                    value={confirmedPassword}
                                    setData={setConfirmedPassword}
                                    type="password"
                                    svg={passwordSvg}
                                    placeholder="Подтвердите новый пароль"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
