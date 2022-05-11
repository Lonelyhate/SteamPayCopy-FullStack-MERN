import React, { FC } from 'react';
import './AdminMenu.scss';
import { AiFillHome } from 'react-icons/ai';
import { AdminContentMenuName, AdminMenuAside } from '../../../../types/types';
import { FaHandshake } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import cn from 'classnames'

const contentMenu: AdminMenuAside = {
    content: [
        { name: AdminContentMenuName.PARTNER, img: FaHandshake },
        { name: AdminContentMenuName.GARANT, img: HiShieldCheck },
    ],
};

interface AdminMenuProps {
    setCurrentChapter: (id: number) => void
    currentChapter: number
}

const AdminMenu: FC<AdminMenuProps> = ({setCurrentChapter, currentChapter}) => {
    return (
        <aside className="admin-menu">
            <div className="admin-menu__header">
                <h2 className="admin-menu__title">
                    <AiFillHome /> Меню
                </h2>
            </div>
            <div className="admin-menu__chapter admin-chapter">
                <h3 className="admin-chapter__title">Контент</h3>
                <ul className="admin-chapter__list">
                    {contentMenu.content.map((item, id) => (
                        <li key={item.name} className="admin-chapter__item">
                            <button onClick={() => setCurrentChapter(id)} className={cn('admin-chapter__btn', {
                                active: id === currentChapter
                            })}>
                                <item.img /> {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default AdminMenu;
