import UrbanAdminApiHandler from '../urbanAdminApiHandler';

const END_POINT = {
  prefix : 'Token',
  refresh : 'refresh'
};
class TokenApiHandler extends UrbanAdminApiHandler{

  authenticate(data){
    return this.post(null , data);
  }

  refreshToken(){
    return this.post(END_POINT.refresh)
  }
}

const tokenApiHandler = new TokenApiHandler(END_POINT.prefix);
export default tokenApiHandler;