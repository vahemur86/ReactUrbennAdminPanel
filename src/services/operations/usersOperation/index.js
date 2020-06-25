import Operations from "../../../core/classes/AppOperation";
import responseErrorCheck from "../../../core/helpers/responseErrorChecker";

class UsersOperation extends Operations{
    constructor(usersApiHandler) {
        super();
        this.usersApiHandler = usersApiHandler;
    }

    async getUser(){
        const response = await this.usersApiHandler.getUser();
        return responseErrorCheck(response);
    }
}

export default UsersOperation;