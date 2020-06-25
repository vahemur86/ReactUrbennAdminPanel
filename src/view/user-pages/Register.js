import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

const CheckboxElem = ({textValue}) => {
  return (
      <div className={`form-check` }>
        <label className="form-check-label text-muted">
          <input type="checkbox" className="form-check-input"/>
          <i className="input-helper"/>
          {textValue}
        </label>
      </div>)
}
const Register = () => {

  return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-dark text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/urbenn-logo.svg")} alt="logo"/>
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1"
                           placeholder="Название категории"/>
                  </div>
                  <div className="form-group my-checkbox-component" >

                    <Dropdown>
                      <Dropdown.Toggle variant="btn btn-outline-primary" id="dropdownMenuOutlineButton1">
                        Разделы
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <CheckboxElem textValue='text'/>
                        <CheckboxElem textValue='text'/>
                        <Dropdown.Header>title1</Dropdown.Header>
                        <CheckboxElem textValue='text'/>
                        <CheckboxElem textValue='text'/>
                        {/*<Dropdown.Item> ddddd</Dropdown.Item>*/}
                        {/*<Dropdown.Divider>home</Dropdown.Divider>*/}
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                  <div className="form-group  my-checkbox-component">
                    <Dropdown>
                      <Dropdown.Toggle variant="btn btn-outline-primary" id="dropdownMenuOutlineButton1">
                           Продавцы
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <CheckboxElem textValue='text1'/>
                        <CheckboxElem textValue='text'/>
                        <Dropdown.Header>title</Dropdown.Header>
                        <CheckboxElem textValue='text'/>
                        <CheckboxElem textValue='text'/>
                        <CheckboxElem textValue='text'/>
                        {/*<Dropdown.Item> <CheckboxElem textValue='text'/></Dropdown.Item>*/}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>

                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          to="/dashboard">Сохранить</Link>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register
