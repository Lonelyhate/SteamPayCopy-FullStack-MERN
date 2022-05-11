import React, { FC } from 'react';
import './ItemControl.scss'
import { IControlItem } from '../../../../types/types';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

interface ItemControlProps {
    item: IControlItem;
    removeItem: (id: string) => void
}

const ItemControl: FC<ItemControlProps> = ({ item, removeItem }) => {
    const dispatch = useDispatch();

    const removeItemHadler = () => {
        dispatch(removeItem(item._id));
    };

    return (
        <li className="item-control">
            <h3 className="item-control__title">{item.title}</h3>
            <div className="item-control__img">
                <img src={`http://localhost:5000/${item.image}`} alt={item.title} />
            </div>
            <p className="item-control__descr">{item.description}</p>
            <time>{item.date}</time>
            <div className="item-control__btns">
                <button className="item-control__edit">
                    <AiOutlineEdit /> Edit
                </button>
                <button onClick={removeItemHadler} className="item-control__delete">
                    <BsTrash /> Delete
                </button>
            </div>
        </li>
    );
};

export default ItemControl;
