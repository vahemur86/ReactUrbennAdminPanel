import * as controllers from './controllerFactory';
import * as TYPES from '../core/constants/actionTypes';



export const configs = {

  [TYPES.AUTH_TYPES.CNTRL_LOGOUT] : controllers.tokenController.logOut,

  //auth types
  [TYPES.AUTH_TYPES.CNTRL_LOG_IN] : controllers.tokenController.authenticate,
  [TYPES.AUTH_TYPES.CNTRL_REFRESH_TOKEN] : controllers.tokenController.refreshToken,


};

export default configs ;
