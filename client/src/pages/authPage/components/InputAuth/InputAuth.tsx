import React, { FC } from 'react';
import './InputAuth.scss';

interface InputAuthProps {
    type: string;
    value: string;
    setData: (e: string) => void;
    placeholder: string;
    svg: string
}

const InputAuth: FC<InputAuthProps> = ({ type, value, setData, placeholder, svg }) => {
    const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
    };
    return (
        <div className="input-auth">
            <input
                placeholder={placeholder}
                className="input-auth__input"
                type={type}
                value={value}
                onChange={changeEvent}
            />
            <img src={svg} alt="email" />
        </div>
    );
};

export default InputAuth;
