import Controller from "../../core/classes/AppController";
import {rxGetTestDone, rxGetTestPending} from "../../state-management/actions/testAction";

class TestController extends Controller {
  constructor(testOperations) {
    super();
    this.testOperations = testOperations;
  }

  getTest = async (store , action) => {
    store.dispatch(rxGetTestPending());
    const response = await this.testOperations.getTest();
    store.dispatch(rxGetTestDone(response));
  }
}

export default TestController;