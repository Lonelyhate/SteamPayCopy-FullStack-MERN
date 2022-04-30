import React, { FC } from 'react';
import './TitleAuth.scss';

interface TitleAuthProps {
    title: string;
}

const TitleAuth: FC<TitleAuthProps> = ({ title }) => {
    return <h2 className='title-auth'>{title}</h2>;
};

export default TitleAuth;
