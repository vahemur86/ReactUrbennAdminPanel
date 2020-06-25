import ApiHandler from '../classes/ApiHandler';
import { ACCESS } from './util';



export const getIsAuthDefaultValue = () => {
  const access = JSON.parse(localStorage.getItem(ACCESS));
  if(access && access.expiresIn && access.expiresIn > Date.now()) {
    ApiHandler.token = access.accessToken;
    return true
  }
  return false
};