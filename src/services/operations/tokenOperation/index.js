import { authSchemeFactory } from '../../../core/utils/authUtil';
import responseErrorCheck from '../../../core/helpers/responseErrorChecker';
import ApiHandler from '../../../core/classes/ApiHandler';
import LocalStorageHelper from "../../../core/helpers/localStorageHelper";
import {ACCESS} from "../../../core/constants/util";
import {rxSetIsAuth} from "../../../state-management/actions/tokenActions";



class TokenOperation  {
  constructor(tokenApiHandler){
    this.tokenApiHandler = tokenApiHandler;
    this.expirationInsurance = 100;
  }

  async authenticate(data){
    const {email , password} = data;
    const response = await this.authApp(email , password);
    if(response.hasOwnProperty('accessToken')){
      this._attachTimer(response)
    }
    return response;
  }

  _attachTimer(response){
    const timer = (response.expiresIn - this.expirationInsurance) * 1000;
    this._tokenAccessConfig(response);
    clearTimeout(ApiHandler.refreshTimer);
    ApiHandler.refreshTimer = setTimeout(() => {

      this.authRefresh().then(res => {
        this._tokenAccessConfig(res)
      }).catch(e => console.error(e));
    }, timer)
  }
  _tokenAccessConfig = response => {
    ApiHandler.token = response.accessToken;
    LocalStorageHelper.deleteItem(ACCESS);
    response.expiresIn = (response.expiresIn - this.expirationInsurance) * 1000 + Date.now();
    LocalStorageHelper.setItem(ACCESS, response)
  };

  async authRefresh() {
    const response = await this.tokenApiHandler.refreshToken();
    const result = responseErrorCheck(response);
    this._attachTimer(result);
    return result
  }

  async authApp(email, password) {
    const response = await this.tokenApiHandler.authenticate(authSchemeFactory()(email, password));
    return responseErrorCheck(response);
  }

  logOut(store) {
    ApiHandler.token = "";
    LocalStorageHelper.deleteItem(ACCESS);
    return true;
  }
}

export default TokenOperation;
