import {combineReducers} from "redux";
import createAsyncReducer from "../../core/helpers/createAsyncReducer";
import createReducer from '../../core/helpers/createReducer';
import {TEST} from "../../core/constants/actionTypes";


export const testReducer = combineReducers({
    test : createAsyncReducer(TEST.RX_GET_TEST, {})
});