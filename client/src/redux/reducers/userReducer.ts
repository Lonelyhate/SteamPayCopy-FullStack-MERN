import { UserAction, UserActionTypes, UserState } from '../types/user';

const initialState: UserState = {
    currentUser: null,
    isAuth: false,
    error: null,
    loading: false,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                isAuth: true,
                error: null
            }
        case UserActionTypes.FETCH_USER_AUTH:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                isAuth: true,
                error: null
            }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};
