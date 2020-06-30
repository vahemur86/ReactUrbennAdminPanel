import * as ApiHandlers from '../services/api';
import * as Operations from '../services/operations';
import * as Controllers from '../controllers';

//operations
const tokenOperation = new Operations.TokenOperation(ApiHandlers.tokenApiHandler);

//controllers
const tokenController = new Controllers.TokenController(tokenOperation);


export {
  tokenController,
};