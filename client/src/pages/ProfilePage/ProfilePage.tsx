import React, { FC, useState } from 'react';
import './ProfilePage.scss';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';
import ProfileAside from './components/ProfileAside/ProfileAside';
import { Route, Routes } from 'react-router-dom';
import { PROFILE_SETTINGS_ROUTE } from '../../utils/constsPath';
import ProfilePartner from './components/ProfilePartner/ProfilePartner';

const ProfilePage: FC = () => {
    const [currentChapter, setCurrentChapter] = useState<number>(0);

    return (
        <section className="profile-page">
            <div className="container">
                <div className="profile-page__content">
                    {currentChapter === 0 && <ProfileSettings />}
                    {currentChapter === 1 && <ProfilePartner />}
                    <ProfileAside setId={setCurrentChapter} />
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
