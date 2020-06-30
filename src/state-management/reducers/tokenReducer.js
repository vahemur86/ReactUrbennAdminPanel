import createReducer from '../../core/helpers/createReducer';
import { getIsAuthDefaultValue } from '../../core/constants/authUtil';
import { AUTH_TYPES } from '../../core/constants/actionTypes';
import {combineReducers} from 'redux';



export const tokenReducers = combineReducers({
  isAuthReducer : createReducer(getIsAuthDefaultValue() , {
    [AUTH_TYPES.RX_SET_AUTH_BOOL] : (store , action) => action.payload
  })
});
