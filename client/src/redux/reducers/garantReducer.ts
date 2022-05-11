import { GarantAction, GarantActionTypes, GarantState } from '../types/garant';

const initialState: GarantState = {
    garants: [],
    error: null,
    loading: false,
};

export const garantReducer = (state = initialState, action: GarantAction): GarantState => {
    switch (action.type) {
        case GarantActionTypes.FETCH_GARANT:
            return {
                ...state,
                loading: true,
            };
        case GarantActionTypes.FETCH_GARANT_SUCCESS:
            return {
                ...state,
                loading: false,
                garants: action.payload,
                error: null,
            };
        case GarantActionTypes.ADD_GARANT:
            return {
                ...state,
                loading: false,
                error: null,
                garants: [...state.garants, action.payload],
            };
        case GarantActionTypes.REMOVE_GARANT:
            return {
                ...state,
                loading: false,
                error: null,
                garants: [...state.garants.filter((item) => item._id != action.payload)],
            };
        case GarantActionTypes.FETCH_GARANT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
