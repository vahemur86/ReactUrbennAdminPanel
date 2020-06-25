import Controller from '../../core/classes/AppController';
import LocalStorageHelper from '../../core/helpers/localStorageHelper';

import ApiHandler from '../../core/classes/ApiHandler';
import {cntrlGetUser} from "../../state-management/actions/usersActions";
import {cntrlRefreshToken, rxSetIsAuth} from "../../state-management/actions/tokenActions";

const ACCESS = 'access';
class AppController extends Controller{
  constructor(appOperation){
    super();
    this.appOperation = appOperation;
  }
  init = async (store , action) => {
    const access = LocalStorageHelper.getItem(ACCESS);
    if(access){
      if (access && access.expiresIn > Date.now()){
        ApiHandler.token = access.accessToken;
        await store.dispatch(cntrlGetUser());
        store.dispatch(cntrlRefreshToken());
        return true
      }else {
        return false
      }
    }else{
      return false
    }
  }


}

export default AppController;
