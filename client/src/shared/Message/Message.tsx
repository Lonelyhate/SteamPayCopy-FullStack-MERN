import React, { FC } from 'react';
import './Message.scss';
import cn from 'classnames';
import Loader from '../Loader/Loader';

interface MessageProps {
    message: string;
    loading: boolean;
    active?: boolean
}

const Message: FC<MessageProps> = ({ message, loading, active }) => {
    return (
        <div
            className={cn('message', {
                active: message,
                visable: active
            })}>
            <p className="message__text">{!loading ? message : <Loader height='20px' width='20px' />}</p>
        </div>
    );
};

export default Message;
