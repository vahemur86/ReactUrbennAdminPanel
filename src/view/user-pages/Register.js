import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

// onClick={ ()=> setPerson((person) => {
//   return { ...person , firstName: 'Mike'}
// })}

 const CheckboxElem = ({textValue, foo}) => {
  return (
      <div className={`form-check`}>
        <label className="form-check-label text-muted">
          <input onChange={foo}
                 type="checkbox"
                 className="form-check-input"
                 value={textValue}/>
          <i className="input-helper"/>
          {textValue}
        </label>
      </div>
  )
}
const mockData =['Все', 'Продавцы', 'Покупатели', 'ТК'];

const Register = () => {
  const [data, setData] = useState([]);
  const onHandleCheck = (e) => {
    console.log(e.target.value, e.target.checked)
    // setData(e.target.value)
  }
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
                        {  mockData.map((item)=> <CheckboxElem textValue={item} foo={onHandleCheck}/>)}
                        {/*{  Object.keys(mockData1).map((item)=> <CheckboxElem textValue={item} foo={onHandleCheck}/>)}*/}
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                  {
                      <div className="form-group  my-checkbox-component">
                          {
                            <Dropdown>
                              <Dropdown.Toggle variant="btn btn-outline-primary" id="dropdownMenuOutlineButton1">

                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Header>title</Dropdown.Header>
                                <CheckboxElem textValue='text1'/>

                                {/*<Dropdown.Item> <CheckboxElem textValue='text'/></Dropdown.Item>*/}
                              </Dropdown.Menu>
                            </Dropdown>
                          }
                        </div>
                    }
                  <div className="form-group">
                    <input type="password"
                           className="form-control form-control-lg"
                           id="exampleInputPassword1"
                           placeholder="Password"/>
                  </div>

                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          to="/tables/data-table">Сохранить</Link>
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
