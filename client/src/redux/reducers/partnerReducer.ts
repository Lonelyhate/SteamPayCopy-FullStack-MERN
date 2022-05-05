import { PartnerAction, PartnerActionTypes, PartnerState } from "../types/partner";

const initialState: PartnerState = {
    partners: [],
    error: null,
    loading: false
}

export const partnerReducer = (state = initialState, action: PartnerAction): PartnerState => {
    switch (action.type) {
        case PartnerActionTypes.FETCH_PARTNER:
            return {
                ...state,
                loading: true
            }
        case PartnerActionTypes.FETCH_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: action.payload
            }
        case PartnerActionTypes.PARTNER_ADD:
            return {
                ...state,
                partners: [...state.partners, action.payload]
            }
        case PartnerActionTypes.PARTNER_REMOVE:
            return {
                ...state,
                partners: state.partners.filter(item => item.id !== action.payload)
            }
        case PartnerActionTypes.FETCH_PARTNER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}