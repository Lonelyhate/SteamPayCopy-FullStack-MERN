import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Avatar from '../../../../shared/Avatar/Avatar';
import './ProfileAside.scss';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE, PROFILE_ROUTE } from '../../../../utils/constsPath';
import { ProfileMenuName, ProfileMunu, ProfileMunuLink } from '../../../../types/types';
import { logoutUser } from '../../../../redux/actions/user';
import { useDispatch } from 'react-redux';
import {GrUserAdmin} from 'react-icons/gr'

const profileMunu: ProfileMunu[] = [
    {
        link: ProfileMunuLink.SETTINGS,
        name: ProfileMenuName.SETTINGS,
    },
    {
        link: ProfileMunuLink.PARTNER,
        name: ProfileMenuName.PARTNER,
    },
    {
        link: ProfileMunuLink.PURCHASE,
        name: ProfileMenuName.PURCHASE,
    },
];

interface PofileAsideProps {
    setId: (id: number) => void;
}

const ProfileAside: FC<PofileAsideProps> = ({ setId }) => {
    const { currentUser } = useTypedSelector((state) => state.user);
    const role = currentUser?.role;
    console.log(role);
    const dispatch = useDispatch();

    return (
        <aside className="profile-page__right profile-right">
            <div className="profile-right__header">
                <Avatar height={100} width={100} />
                <p className="profile-right__welcome">
                    Привет, <span>{currentUser?.nickname}</span>
                </p>
            </div>
            <nav className="profile-right__nav">
                <ul className="profile-right__list">
                    {profileMunu.map((item, id) => (
                        <li key={item.link} className="profile-right__item">
                            <button onClick={() => setId(id)} className="profile-right__btn">
                                {item.name}
                            </button>
                        </li>
                    ))}
                    {role === 'admin' && (
                        <li className="profile-right__item">
                            <Link className='profile-right__link' to={ADMIN_ROUTE}><GrUserAdmin /> Админка</Link>
                        </li>
                    )}
                    <li className="profile-right__item">
                        <button
                            onClick={() => {
                                dispatch(logoutUser());
                            }}
                            className="profile-right__btn">
                            Выход
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default ProfileAside;
