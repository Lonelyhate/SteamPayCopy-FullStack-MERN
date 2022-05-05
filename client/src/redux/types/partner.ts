import { IPartnerItem } from '../../types/types';

export interface PartnerState {
    partners: IPartnerItem[];
    loading: boolean;
    error: null | string;
}

export enum PartnerActionTypes {
    FETCH_PARTNER = 'FETCH_PARTNERS',
    FETCH_PARTNER_SUCCESS = 'FETCH_PARTNERS_SUCCESS',
    FETCH_PARTNER_ERROR = 'FETCH_PARTNER_ERROR',
    PARTNER_ADD = 'PARTNER_ADD',
    PARTNER_REMOVE = 'PARTNER_REMOVE',
}

interface FetchPartnerAction {
    type: PartnerActionTypes.FETCH_PARTNER;
}

interface FetchPartnerSuccessAction {
    type: PartnerActionTypes.FETCH_PARTNER_SUCCESS;
    payload: IPartnerItem[];
}

interface FetchPartnerErrorAction {
    type: PartnerActionTypes.FETCH_PARTNER_ERROR;
    payload: string;
}

interface PartnerAddAction {
    type: PartnerActionTypes.PARTNER_ADD;
    payload: IPartnerItem;
}

interface PartnerRemoveAction {
    type: PartnerActionTypes.PARTNER_REMOVE;
    payload: number;
}

export type PartnerAction =
    | FetchPartnerAction
    | FetchPartnerSuccessAction
    | FetchPartnerErrorAction
    | PartnerAddAction
    | PartnerRemoveAction;
