import Controller from "../../core/classes/AppController";
import {rxGetUserDone, rxGetUserPending} from "../../state-management/actions/usersActions";

class UserController extends Controller{
    constructor(usersOperations) {
        super();
        this.usersOperations = usersOperations;
    }

    getUser = async (store , action) => {
        store.dispatch(rxGetUserPending());
        const response = await this.usersOperations.getUser();
        store.dispatch(rxGetUserDone(response));
    }
}

export default UserController;