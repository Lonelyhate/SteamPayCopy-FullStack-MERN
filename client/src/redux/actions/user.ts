import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '../types/user';
import jwtDecode from 'jwt-decode';
import { IError, IUser } from '../../types/types';

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
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            localStorage.removeItem('token');
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message
            })
        }
    };
};

export const uploadAvatar = (img: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const formData = new FormData();
            formData.append('img', img);
            const response = await axios.post('http://localhost:5000/api/user/avatar', formData, {
                headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
            });
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: jwtDecode(response.data.token),
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const deleteAvatar = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const response = await axios.delete('http://localhost:5000/api/user/avatar', {
                headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
            });
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: jwtDecode(response.data.token),
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const changeEmail = (newEmail: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const response = await axios.put(
                'http://localhost:5000/api/user/email',
                { email: newEmail },
                {
                    headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
                },
            );
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: jwtDecode(response.data.token),
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const changePassword = (password: string, newPassword: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const response = await axios.put(
                'http://localhost:5000/api/user/password',
                { password, newPassword },
                {
                    headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
                },
            );
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: jwtDecode(response.data.token),
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};

export const changeNickname = (nickname: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USER });
            const response = await axios.put(
                'http://localhost:5000/api/user/nickname',
                { nickname },
                {
                    headers: { Authorization: `bearer ${localStorage.getItem('token')}` },
                },
            );
            dispatch({
                type: UserActionTypes.FETCH_USER_SUCCESS,
                payload: jwtDecode(response.data.token),
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: (e as IError).response.data.message,
            });
        }
    };
};
