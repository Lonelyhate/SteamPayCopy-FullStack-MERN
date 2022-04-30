import React, { FC } from 'react';
import avatarImg from '../../assets/img/avatar.png'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Avatar.scss'

interface AvatarProps {
    width: number;
    height: number;
}

const Avatar: FC<AvatarProps> = ({ height, width }) => {
    const {currentUser} = useTypedSelector(state => state.user)
    let avatarPath = currentUser?.avatar ? 'http://localhost:5000/' + currentUser.avatar : avatarImg 
    if(currentUser?.avatar) {

    }

    return (
        <div className="avatar" style={{ width: width, height: height }}>
            <img src={avatarPath} alt="avatar" />
        </div>
    );
};

export default Avatar;
