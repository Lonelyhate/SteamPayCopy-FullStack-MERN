import React, { FC, useState } from 'react';
import AdminMenu from './components/AdminMenu/AdminMenu';
import './AdminPage.scss';
import PartnerControl from './components/PartnerControl/PartnerControl';
import GarantControl from './components/GarantControl/GarantControl';

const chapters = [PartnerControl, GarantControl];

const AdminPage: FC = () => {
    const [currentChapter, setCurrentChapter] = useState<number>(0);
    return (
        <div className="admin-page">
            <AdminMenu currentChapter={currentChapter} setCurrentChapter={setCurrentChapter} />
            {chapters.map((Component, id) => currentChapter === id && <Component key={id} />)}
        </div>
    );
};

export default AdminPage;
