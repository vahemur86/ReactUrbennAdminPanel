import React, {useState} from 'react';

import {cntrlGetTest} from '../../state-management/actions/testAction';
import {connect} from 'react-redux';

const Login2 = function ({history ,test, login}){
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const getUserNameValue = (e) => {
    setUserName(e.target.value)
  };
  const getPasswordValue = (e) => {
    setPassword(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // login(
    //     {
    //         username: username.trim(),
    //         password: password.trim()
    //     }
    // ).then(res => {
    //     if (!(res.hasOwnProperty('error'))) {
    //         const clientId = JSON.parse(atob(res.accessToken.split('.')[1]));
    //         console.log('login')
    //     }else{
    //         setIsSuccess(false)
    //        console.log('error')
    //     }
    // })
     if( username === null && password === null){
         setIsSuccess(false);
         test()
         return;
     }
      setIsSuccess(true);
  };

  if (isSuccess===true) {
    history.push('/dashboard')
  }
    return (
      <div>
        <div className="d-flex align-items-stretch auth auth-img-bg h-100">
          <div className="row flex-grow">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="auth-form-transparent text-left p-3">
                <div className="brand-logo">
                  <img src={require("../../assets/images/urbenn-logo-no-text.svg")} alt="logo" />
                </div>
                <h4>Welcome back!</h4>
                <h6 className="font-weight-light">Добро пожаловать!</h6>
                <form className="pt-3">
                    {
                        (isSuccess ===false) && <div
                            role="alert"
                            className="fade alert alert-danger show"> Incorrect password or username
                        </div>
                    }
                  <div className="form-group">
                    <label>Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="ti-user text-primary"/>
                        </span>
                      </div>
                      <input type="email"
                             onChange = {getUserNameValue}
                             className="form-control form-control-lg border-left-0"
                             id="exampleInputEmail"
                             placeholder="Эл. почта" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Пароль</label>
                    <div className="input-group">
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="ti-lock text-primary"/>
                        </span>
                      </div>
                      <input type="password"
                             onChange = {getPasswordValue}
                             className="form-control form-control-lg border-left-0"
                             id="exampleInputPassword"
                             placeholder="Пароль" />
                    </div>
                  </div>
                  <div className="my-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleSubmit}>Войти</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 login-half-bg d-flex flex-row"/>
          </div>
        </div>
      </div>
    )

}
const mapDispatchToProps = dispatch => ({
  test: ()=> dispatch(cntrlGetTest()),
  // login : data => dispatch(cntrlAunthenticate(data)),
  // init : () => dispatch(cntrlAppInit()),
});
export default connect(null, mapDispatchToProps)(Login2)
// export default Login2
