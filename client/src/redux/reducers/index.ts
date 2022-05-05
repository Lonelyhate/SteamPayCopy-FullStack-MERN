import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { partnerReducer } from './partnerReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    partner: partnerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
