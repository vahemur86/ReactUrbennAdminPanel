import {combineReducers} from "redux";
import createAsyncReducer from "../../core/helpers/createAsyncReducer";
import {USERS} from "../../core/constants/actionTypes";

export const usersReducer = combineReducers({
    user : createAsyncReducer(USERS.RX_GET_USERS , {})
});