import React, { FC, useState } from 'react';
import './PartnerModal.scss';
import { GrClose } from 'react-icons/gr';
import { addPartner } from '../../../../redux/actions/partner';
import InputAuth from '../../../../shared/InputAuth/InputAuth';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

interface PartnerModalProps {
    visable: boolean;
    setVisable: (visable: boolean) => void;
}

const PartnerModal: FC<PartnerModalProps> = ({ visable, setVisable }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<any>('');
    const [description, setDescription] = useState<any>('');
    const [img, setImg] = useState<any>(null);

    const fetchAddPartner = () => {
        dispatch(addPartner(title, description, img));
        setDescription('')
        setTitle('')
        setImg(null)
        setVisable(false);
    };

    return (
        <div
            onClick={() => setVisable(false)}
            className={cn('partner-modal', {
                active: visable,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="partner-modal__content">
                <div className="partner-modal__header">
                    <h3 className="partner-modal__title">Добавление программы</h3>
                    <button onClick={() => setVisable(false)} className="partner-modal__close">
                        <GrClose />
                    </button>
                </div>
                <div className="partner-modal__main">
                    <label className="partner-modal__label">
                        <span>Заголовок</span>
                        <InputAuth
                            value={title}
                            placeholder="Введите заголовок..."
                            type="text"
                            setData={setTitle}
                        />
                    </label>
                    <label className="partner-modal__label">
                        <span>Описание</span>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Введите описание..."
                            value={description}
                        />
                    </label>
                    <label className="partner-modal__label">
                        <span>Прикрепить изображение</span>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setImg(e.target.files?.[0])
                            }
                            className="partner-modal__add-image"
                            type="file"
                        />
                    </label>
                    <button onClick={fetchAddPartner} className="partner-modal__add">
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnerModal;
