import responseErrorCheck from "../../../core/helpers/responseErrorChecker";

class UsersOperation {
    constructor(usersApiHandler) {
        this.usersApiHandler = usersApiHandler;
    }

    async getUser(){
        const response = await this.usersApiHandler.getUser();
        return responseErrorCheck(response);
    }
}

export default UsersOperation;