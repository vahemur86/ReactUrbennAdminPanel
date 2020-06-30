import React, {useState} from 'react';
import { cntrlAunthenticate ,rxSetIsAuth} from '../../state-management/actions/tokenActions';
import {connect, useSelector} from 'react-redux';

const Login = function ({history ,setIsAuth, login}){
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const [checkUsername, setCheckUsername] = useState(true);
  const [isSuccess, setIsSuccess] = useState(null);
  const isAuth = useSelector(({auth}) => auth.isAuthReducer);

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const getUserNameValue = (e) => {
    setUserName(e.target.value)
  };
  const getPasswordValue = (e) => {
    setPassword(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckUsername(validateEmail(username))
    return
    login(
        {
          email: username.trim(),
          password: password.trim()
        }
    ).then(res => {
        if (!(res.hasOwnProperty('errorMessage')) ) {
          setIsAuth(true);
          setIsSuccess(true);
          // const clientId = JSON.parse(atob(res.accessToken.split('.')[1]));

        }else{
            setIsSuccess(false)
        }
    })


  };

  if (isSuccess===true) {
    history.push('/dashboard')
  }
  console.log(checkUsername)
    return (
      <div>
        <div className="d-flex align-items-stretch auth auth-img-bg h-100">
          <div className="row flex-grow">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="auth-form-transparent text-left p-3">
                <div className="brand-logo">
                  <img src={require("../../assets/images/urbenn-logo.svg")} alt="logo" />
                </div>
                <h6 className="font-weight-light">Добро пожаловать!</h6>
                <form className="pt-3">
                    {
                        (isSuccess ===false) && <div
                            role="alert"
                            className="fade alert alert-danger show"> Неверный логин или пароль
                        </div>
                    }

                  <div className={" form-group"}>
                    <div className={ `${!checkUsername  ?'err-valid-feedback-border ':' '} input-group`}>
                      <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                          <i className="ti-user text-primary"/>
                        </span>
                      </div>
                      <input type="email"
                             onChange = {getUserNameValue}
                             className={ 'form-control form-control-lg border-left-0'}
                             id="exampleInputEmail"
                             placeholder="Эл. почта" />
                    </div>
                    {!checkUsername && <div className="err-valid-feedback">Please choose a Email.</div>}
                  </div>
                  <div className="form-group">
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
  login : data => dispatch(cntrlAunthenticate(data)),
  setIsAuth : (bool) => dispatch(rxSetIsAuth(bool)),
});
export default connect(null, mapDispatchToProps)(Login)
