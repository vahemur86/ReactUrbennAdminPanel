import UrbanAdminApiHandler from "../urbanAdminApiHandler";
const END_POINT = {
    prefix : 'starships'
};

class TestApiHandler extends UrbanAdminApiHandler{
    getTest(){
        return super.get();
    }
}
const testApiHandler = new TestApiHandler(END_POINT.prefix);
export default testApiHandler;