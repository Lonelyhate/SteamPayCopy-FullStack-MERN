import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { partnerReducer } from './partnerReducer';
import { garantReducer } from './garantReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    partner: partnerReducer,
    garant: garantReducer
});

export type RootState = ReturnType<typeof rootReducer>;
