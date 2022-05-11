import axios from 'axios';
import { Dispatch } from 'react';
import { IError } from '../../types/types';
import { GarantAction, GarantActionTypes } from '../types/garant';

export const fetchGarant = () => {
    return async (dispatch: Dispatch<GarantAction>) => {
        try {
            dispatch({ type: GarantActionTypes.FETCH_GARANT });
            const response = await axios.get('http://localhost:5000/api/garant', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            console.log(response)
            dispatch({
                type: GarantActionTypes.FETCH_GARANT_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: GarantActionTypes.FETCH_GARANT_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const addGarant = (title: string, description: string, img: any) => {
    return async (dispatch: Dispatch<GarantAction>) => {
        try {
            dispatch({ type: GarantActionTypes.FETCH_GARANT });

            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('img', img);

            const response = await axios.post('http://localhost:5000/api/garant', formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            dispatch({
                type: GarantActionTypes.ADD_GARANT,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: GarantActionTypes.FETCH_GARANT_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const removeGarant = (id: string) => {
    return async (dispatch: Dispatch<GarantAction>) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/garant/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            dispatch({
                type: GarantActionTypes.REMOVE_GARANT,
                payload: id,
            });
        } catch (e) {
            dispatch({
                type: GarantActionTypes.FETCH_GARANT_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};
