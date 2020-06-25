import React, {Component} from 'react';

export class Dashboard extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-xl-5 mb-4 mb-xl-0 grid-margin">
                        <h4 className="font-weight-bold">Hi, Welcomeback!</h4>
                        <h4 className="font-weight-normal mb-0">JustDo Dashboard,</h4>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Number of Meetings</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                                    <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"/>
                                </div>
                                <p className="mb-0 mt-2 text-warning">2.00% <span className="text-body ml-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Number of Clients</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                                    <i className="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"/>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.22% <span className="text-body ml-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Today’s Bookings</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40016</h3>
                                    <i className="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"/>
                                </div>
                                <p className="mb-0 mt-2 text-success">10.00%<span className="text-body ml-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Total Items Bookings</p>
                                <div
                                    className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                                    <i className="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"/>
                                </div>
                                <p className="mb-0 mt-2 text-success">22.00%<span className="text-body ml-1"><small>(30 days)</small></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    }

    export default Dashboard;