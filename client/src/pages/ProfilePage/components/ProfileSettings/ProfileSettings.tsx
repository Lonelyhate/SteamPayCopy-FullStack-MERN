import React, { useEffect, useState } from 'react';
import Avatar from '../../../../shared/Avatar/Avatar';
import Title from '../../../../shared/Title/Title';
import './ProfileSettings.scss'
import uploadSvg from '../../../../assets/img/upload.svg';
import TitleAuth from '../../../../shared/TitleAuth/TitleAuth';
import InputAuth from '../../../../shared/InputAuth/InputAuth';
import Button from '../../../../shared/Button/Button';
import passwordSvgOrange from '../../../../assets/img/password-orange.svg';
import passwordSvgBlue from '../../../../assets/img/password-blue.svg';
import emailSvg from '../../../../assets/img/email-orange.svg';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
    changeEmail,
    changeNickname,
    changePassword,
    deleteAvatar,
    uploadAvatar,
} from '../../../../redux/actions/user';
import Message from '../../../../shared/Message/Message';

const ProfileSettings = () => {
    const dispatch = useDispatch();
    const { currentUser, error, loading } = useTypedSelector((state) => state.user);
    const [nickname, setNickname] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmedEmail, setConfirmedEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [numberError, setNumberError] = useState<number>(0);

    const uploadAvatarOnProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const img = e.target.files?.[0];
        dispatch(uploadAvatar(img));
    };

    const changeEmailHangler = () => {
        if (email !== confirmedEmail) {
            setMessage('Email не совпадает');
            setNumberError(3);
        } else if (email.length === 0 || confirmedEmail.length === 0) {
            setMessage('Введите Email');
            setNumberError(3);
        } else {
            dispatch(changeEmail(email));
            setMessage('Email успешно изменен!');
            setNumberError(3);
        }
    };

    const changePasswordHandler = () => {
        if (confirmedPassword !== newPassword) {
            setMessage('Пароли не совпадают');
            setNumberError(2);
        } else if (newPassword.length === 0 || oldPassword.length === 0) {
            setMessage('Введите пароль');
            setNumberError(2);
        } else {
            dispatch(changePassword(oldPassword, newPassword));
            setMessage('Пароль успешно изменен!');
            setNumberError(2);
        }
    };

    const changeNicknameHandler = () => {
        if (nickname.length === 0) {
            setMessage('Введите никнейм');
            setNumberError(1);
        } else {
            dispatch(changeNickname(nickname));
            setMessage('Никнейм успешно изменен!');
            setNumberError(1);
        }
    };

    useEffect(() => {
        if (error) {
            setMessage(error);
        }
    }, [error]);

    return (
        <div className="profile-settings">
            <Title title="Личный кабинет" />
            <div className="profile-settings__left">
                <div className="profile-settings__top">
                    <div className="profile-settings__avatar">
                        <Avatar height={150} width={150} />
                        <label className="profile-settings__label-upload" htmlFor="avatar">
                            <img src={uploadSvg} alt="upload" /> Изменить аватар
                        </label>
                        {currentUser?.avatar && (
                            <button
                                onClick={() => dispatch(deleteAvatar())}
                                className="profile-settings__delete-avatar">
                                Удалить аватар
                            </button>
                        )}
                        <input
                            accept="image/*"
                            onChange={uploadAvatarOnProfile}
                            className="profile-settings__upload-input"
                            id="avatar"
                            type="file"
                            placeholder="Изменить автар"
                        />
                    </div>
                    <div className="profile-settings__nickname">
                        <TitleAuth title="Изменить никнейм" />
                        {numberError === 1 && (
                            <Message active={true} loading={loading} message={message} />
                        )}
                        <InputAuth
                            value={nickname}
                            placeholder="Введите новый никнейм"
                            type="text"
                            setData={setNickname}
                        />
                        <Button
                            click={changeNicknameHandler}
                            text="Изменить никнейм"
                            background="blue"
                            width={330}
                        />
                    </div>
                </div>
                <div className="profile-settings__bottom">
                    <div className="profile-settings__password">
                        <TitleAuth title="Изменить пароль" />
                        {numberError === 2 && (
                            <Message active={true} loading={loading} message={message} />
                        )}
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
                        <Button
                            click={changePasswordHandler}
                            background="blue"
                            text="Изменить пароль"
                            width={330}
                        />
                    </div>
                    <div className="profile-settings__email">
                        <TitleAuth title="Изменить email" />
                        <p className="profile-settings__text">Ваш email: {currentUser?.email}</p>
                        {numberError === 3 && (
                            <Message active={true} loading={loading} message={message} />
                        )}
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
                        <Button
                            click={changeEmailHangler}
                            background="blue"
                            text="Изменить email"
                            width={330}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
