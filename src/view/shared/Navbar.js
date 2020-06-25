import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo mr-5" to="/"><img src={require('../../assets/images/logo-white.svg')} className="mr-2" alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-end">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="ti-layout-grid2"></span>
          </button>
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                  <span className="input-group-text" id="search">
                    <i className="ti-search"></i>
                  </span>
                </div>
                <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"></input>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item mr-1">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="ti-email"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <p className="p-3 mb-0 ">Messages</p>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src="https://via.placeholder.com/36x36" alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">David Grey</h6>
                      <p className="text-gray mb-0">
                         The meeting is cancelled
                      </p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src="https://via.placeholder.com/36x36" alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Tim Cook</h6>
                      <p className="text-gray mb-0">
                          New product launch
                      </p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src="https://via.placeholder.com/36x36" alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Johnson</h6>
                      <p className="text-gray mb-0">
                        Upcoming board meeting 
                      </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="ti-bell"></i>
                  <span className="count"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                  <p className="p-3 mb-0 ">Notifications</p>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="ti-info-alt"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Application Error</h6>
                      <p className="text-gray ellipsis mb-0">
                      Just now
                      </p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="ti-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                      <p className="text-gray ellipsis mb-0">
                      Private message
                      </p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="ti-user"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">New user registration</h6>
                      <p className="text-gray ellipsis mb-0">
                      2 days ago!
                      </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-profile">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <img src="https://via.placeholder.com/40x40" alt="profile"/>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex align-items-center">
                      <i className="ti-settings text-primary"></i>
                      <span className="pl-2">Settings</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex align-items-center">
                      <i className="ti-power-off text-primary"></i>
                      <span className="pl-2">Logout</span>
                    </div>  
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <button type="button" className="nav-link border-0 bg-transparent" onClick={this.toggleRightSidebar} >
                <i className="ti-more"></i>
              </button>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="ti-layout-grid2"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
