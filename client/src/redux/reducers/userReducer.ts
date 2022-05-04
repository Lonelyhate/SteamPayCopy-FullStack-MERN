import { UserState, UserAction, UserActionTypes } from '../types/user';

const initalState: UserState = {
    currentUser: null,
    error: null,
    isAuth: false,
    loading: false,
};

export const userReducer = (state = initalState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {
                ...state,
                error: null,
                isAuth: false,
                loading: true,
            };
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                isAuth: true,
                loading: false
            };
        case UserActionTypes.FETCH_USER_AUTH:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                isAuth: true,
                loading: false,
            };
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                isAuth: false,
                loading: false
            }
        default:
            return state;
    }
};
