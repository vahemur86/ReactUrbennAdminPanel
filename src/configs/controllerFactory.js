import * as ApiHandlers from '../services/api';
import * as Controllers from '../controllers';
import * as Operations from '../services/operations';



//operations
const testOperation = new Operations.TestOperation(ApiHandlers.testApiHandler);


//controllers
// const appController = new Controllers.AppController();
// const tokenController = new Controllers.TokenController(tokenOperation);
// const usersController = new Controllers.UserController(usersOperation);
const testController = new Controllers.TestController(testOperation);

export {
  // appController,
  // tokenController,
  // usersController,
  testController
};