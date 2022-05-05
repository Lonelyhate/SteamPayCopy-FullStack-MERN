import React, { FC, useState } from 'react';
import AdminMenu from './AdminMenu/AdminMenu';
import './AdminPage.scss';
import PartnerControl from './PartnerControl/PartnerControl';

const chapters = [PartnerControl];

const AdminPage: FC = () => {
    const [currentChapter, setCurrentChapter] = useState<number>(0);
    return (
        <div className="admin-page">
            <AdminMenu />
            {chapters.map((Component, id) => currentChapter === id && <Component key={id} />)}
        </div>
    );
};

export default AdminPage;
