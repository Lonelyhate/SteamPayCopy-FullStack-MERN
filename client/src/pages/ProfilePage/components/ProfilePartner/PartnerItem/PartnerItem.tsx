import React from 'react';
import './Partner.scss';
import msgSvg from '../../../../../assets/img/messages.svg';

const PartnerItem = () => {
    return (
        <article className="partner-item">
            <div className="partner-item__img">
                <img src={msgSvg} alt="message" />
            </div>
            <div className="partner__text">
                <h3 className="partner-item__title">Что это такое</h3>
                <p className="partner-item__description">
                    Партнёрская программа - это форма выгодного сотрудничества для продавца и
                    партнёра. Мы будем выплачивать до 10% за каждый купленный товар человеком,
                    прошедшим по вашей индивидуальной ссылке, которую мы Вам предоставим после
                    оформления заявки
                </p>
            </div>
        </article>
    );
};

export default PartnerItem;
