import * as controllers from './controllerFactory';
import * as TYPES from '../core/constants/actionTypes';



export const configs = {
  //init
  // [TYPES.APP_INIT_TYPES.CNTRL_APP_INIT] : controllers.appController.init ,
  // [TYPES.AUTH_TYPES.CNTRL_LOGOUT] : controllers.tokenController.logOut,
  //
  // //auth types
  // [TYPES.AUTH_TYPES.CNTRL_LOG_IN] : controllers.tokenController.authenticate,
  // [TYPES.AUTH_TYPES.CNTRL_REFRESH_TOKEN] : controllers.tokenController.refreshToken,

  //testController
  [TYPES.TEST.CNTRL_GET_TEST]: controllers.testController.getTest
};

export default configs ;
