import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    background: 'orange' | 'blue';
    width: number;
    click?: () => void
}

const Button: FC<ButtonProps> = ({ text, background, width, click }) => {
    return (
        <button onClick={click} style={{ width: width }} className={`button ${background}`}>
            <span>{text}</span>
        </button>
    );
};

export default Button;
