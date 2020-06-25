import responseErrorCheck from "../../../core/helpers/responseErrorChecker";

class TestOperation {
    constructor(testApiHandler) {
        this.testApiHandler = testApiHandler;
    }

    async getTest(){
        const response = await this.testApiHandler.getTest();
        return responseErrorCheck(response);
    }
}

export default TestOperation;