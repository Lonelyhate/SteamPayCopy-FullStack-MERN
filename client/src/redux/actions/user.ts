import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '../types/user';
import jwtDecode from 'jwt-decode';
import { IError, IUser,  } from '../../types/types';

export const loginUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const response = await axios.post('http://localhost:5000/api/user/login', {
                email,
                password,
            });
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: jwtDecode(response.data.token),
            });
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const auth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const response = await axios.get(`http://localhost:5000/api/user/auth`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            dispatch({
                type: UserActionTypes.FETCH_USER_AUTH,
                payload: jwtDecode(response.data.token),
            });
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    };
};
