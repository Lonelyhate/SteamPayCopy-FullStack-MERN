import React, { FC } from 'react';
import './PartnerLink.scss'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

const PartnerLink: FC = () => {
    const {currentUser} = useTypedSelector(state => state.user)

    return (
        <div className="partner-link">
            <p className="partner-link__text">Партнерский промокод: <span>{currentUser?.id}</span></p>
        </div>
    );
};

export default PartnerLink;
