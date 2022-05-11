import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { fetchPartners } from '../../../../redux/actions/partner';
import Title from '../../../../shared/Title/Title';
import PartnerItem from './PartnerItem/PartnerItem';
import PartnerLink from './PartnerLink/PartnerLink';
import './ProfilePartner.scss';

const ProfilePartner: FC = () => {
    const dispatch = useDispatch();
    const { partners } = useTypedSelector((state) => state.partner);

    useEffect(() => {
        dispatch(fetchPartners());
    }, []);

    return (
        <div className="profile-partner">
            <Title title='Партнерская программа'/>
            <ul className="profile-partner__list">
                {partners.map((item) => (
                    <li key={item._id} className="profile-partner__item">
                        <PartnerItem item={item} />
                    </li>
                ))}
                <PartnerLink/>
            </ul>
        </div>
    );
};

export default ProfilePartner;
