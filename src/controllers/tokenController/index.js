import {rxSetIsAuth} from "../../state-management/actions/tokenActions";

class TokenController {
  constructor(tokenOperation){

    this.tokenOperation = tokenOperation;
  }

  authenticate = async (store , action) =>{

    try {
      const response = await this.tokenOperation.authenticate(action.payload);
      return response;
    }catch (e) {
      return new Error(e);
    }
  };

  logOut = async (store, action) => {
    const response = this.tokenOperation.logOut();
    response && store.dispatch(rxSetIsAuth(false));

  }

  refreshToken = async (store , action) => {

    return   await this.tokenOperation.authRefresh();

  }
}
export default TokenController;