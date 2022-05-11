import { IControlItem } from '../../types/types';

export interface GarantState {
    garants: IControlItem[];
    loading: boolean;
    error: null | string;
}

export enum GarantActionTypes {
    FETCH_GARANT = 'FETCH_GARANT',
    FETCH_GARANT_SUCCESS = 'FETCH_GARANT_SUCCESS',
    FETCH_GARANT_ERROR = 'FETCH_GARANT_ERROR',
    ADD_GARANT = 'ADD_GARANT',
    REMOVE_GARANT = 'REMOVE_GARANT',
}

interface FetchGarantAction {
    type: GarantActionTypes.FETCH_GARANT;
}

interface FetchGarantSuccessAction {
    type: GarantActionTypes.FETCH_GARANT_SUCCESS;
    payload: IControlItem[];
}

interface FetchGarantErrorAction {
    type: GarantActionTypes.FETCH_GARANT_ERROR;
    payload: string;
}

interface GarantAddAction {
    type: GarantActionTypes.ADD_GARANT;
    payload: IControlItem;
}

interface GarantRemoveAction {
    type: GarantActionTypes.REMOVE_GARANT;
    payload: string;
}

export type GarantAction =
    | FetchGarantAction
    | FetchGarantErrorAction
    | FetchGarantSuccessAction
    | GarantAddAction
    | GarantRemoveAction;
