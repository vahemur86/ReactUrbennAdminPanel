import Operations from "../../../core/classes/AppOperation";
import responseErrorCheck from "../../../core/helpers/responseErrorChecker";

class TestOperation extends Operations{
    constructor(testApiHandler) {
        super();
        this.testApiHandler = testApiHandler;
    }

    async getTest(){
        const response = await this.testApiHandler.getTest();
        return responseErrorCheck(response);
    }
}

export default TestOperation;