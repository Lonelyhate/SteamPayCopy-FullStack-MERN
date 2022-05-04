import React, { FC } from 'react';
import PartnerItem from './PartnerItem/PartnerItem';
import './ProfilePartner.scss';

const ProfilePartner: FC = () => {
    return (
        <div className="profile-partner">
            <ul className="profile-partner__list">
                <PartnerItem/>
            </ul>
        </div>
    );
};

export default ProfilePartner;
