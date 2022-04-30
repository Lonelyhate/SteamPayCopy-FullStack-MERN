import React, { FC } from 'react';
import avatarImg from '../../assets/img/avatar.png'
import './Avatar.scss'

interface AvatarProps {
    width: number;
    height: number;
}

const Avatar: FC<AvatarProps> = ({ height, width }) => {
    return (
        <div className="avatar" style={{ width: width, height: height }}>
            <img src={avatarImg} alt="avatar" />
        </div>
    );
};

export default Avatar;
