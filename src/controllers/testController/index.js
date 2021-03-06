import {rxGetTestDone, rxGetTestPending} from "../../state-management/actions/testAction";

class TestController  {
  constructor(testOperations) {
    this.testOperations = testOperations;
  }

  getTest = async (store , action) => {
    store.dispatch(rxGetTestPending());
    const response = await this.testOperations.getTest();
    store.dispatch(rxGetTestDone(response));
  }
}

export default TestController;