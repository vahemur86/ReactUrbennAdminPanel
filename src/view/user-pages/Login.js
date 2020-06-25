import React, {useState} from 'react';

import { Form } from 'react-bootstrap';

const Login = function ({history}){
  const [password, setPassword] = useState(null);
  const [username, setUserName] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const getUserNameValue = (e) => {
    setUserName(e.target.value)
  };
  const getPasswordValue = (e) => {
    setPassword(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const user = isLogin ? {username, password} : {username, password};
    setIsSuccess(true)
  };
  console.log(password, username,isSuccess)

  if (isSuccess) {
    history.push('/dashboard')
  }
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-dark text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo-white.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="text" onChange = {getUserNameValue} placeholder="Username" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password"  onChange = {getPasswordValue} placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                    <button onClick={handleSubmit} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
}

export default Login
