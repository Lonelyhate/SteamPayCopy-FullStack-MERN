import React, { FC, useState } from 'react';
import './ModalControl.scss'
import { GrClose } from 'react-icons/gr';
import { addPartner } from '../../../../redux/actions/partner';
import InputAuth from '../../../../shared/InputAuth/InputAuth';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

interface ModalControlProps {
    visable: boolean;
    setVisable: (visable: boolean) => void;
    title: string;
    description: string;
    setTitle: (title: string) => void;
    setDescription: (descr: string) => void;
    setImg: (img: any) => void;
    fetchAdd: () => void;
}

const ModalControl: FC<ModalControlProps> = ({
    visable,
    setVisable,
    title,
    description,
    setTitle,
    setDescription,
    setImg,
    fetchAdd,
}) => {

    return (
        <div
            onClick={() => setVisable(false)}
            className={cn('modal-control', {
                active: visable,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="modal-control__content">
                <div className="modal-control__header">
                    <h3 className="modal-control__title">Добавление программы</h3>
                    <button onClick={() => setVisable(false)} className="modal-control__close">
                        <GrClose />
                    </button>
                </div>
                <div className="modal-control__main">
                    <label className="modal-control__label">
                        <span>Заголовок</span>
                        <InputAuth
                            value={title}
                            placeholder="Введите заголовок..."
                            type="text"
                            setData={setTitle}
                        />
                    </label>
                    <label className="modal-control__label">
                        <span>Описание</span>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Введите описание..."
                            value={description}
                        />
                    </label>
                    <label className="modal-control__label">
                        <span>Прикрепить изображение</span>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setImg(e.target.files?.[0])
                            }
                            className="modal-control__add-image"
                            type="file"
                        />
                    </label>
                    <button onClick={fetchAdd} className="modal-control__add">
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalControl;
