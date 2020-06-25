import UbanBackofficeApiHandler from "../urbanAdminApiHandler";


const END_POINT = {
    prefix : 'users'
};

class UsersApiHandler extends UbanBackofficeApiHandler{


    getUser(){
        return super.get();
    }
}

const usersApiHandler = new UsersApiHandler(END_POINT.prefix);

export default usersApiHandler;