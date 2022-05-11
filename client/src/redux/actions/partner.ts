import axios from 'axios';
import { Dispatch } from 'react';
import { IError } from '../../types/types';
import { PartnerAction, PartnerActionTypes } from '../types/partner';

export const addPartner = (title: string, description: string, img: any) => {
    return async (dispatch: Dispatch<PartnerAction>) => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('img', img);
            const response = await axios.post(
                'http://localhost:5000/api/profile/partner',
                formData,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                },
            );
            dispatch({
                type: PartnerActionTypes.PARTNER_ADD,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: PartnerActionTypes.FETCH_PARTNER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const removePartners = (id: string) => {
    return async (dispatch: Dispatch<PartnerAction>) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/profile/partner/${id}`, {
                headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
            });
            dispatch({
                type: PartnerActionTypes.PARTNER_REMOVE,
                payload: id
            })
        } catch (e) {
            dispatch({
                type: PartnerActionTypes.FETCH_PARTNER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const fetchPartners = () => {
    return async (dispatch: Dispatch<PartnerAction>) => {
        try {
            dispatch({ type: PartnerActionTypes.FETCH_PARTNER });
            const response = await axios.get('http://localhost:5000/api/profile/partner', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            dispatch({
                type: PartnerActionTypes.FETCH_PARTNER_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: PartnerActionTypes.FETCH_PARTNER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};
