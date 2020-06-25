import React, {Component} from 'react';
import {Bar, Chart, Line} from 'react-chartjs-2';
import {Dropdown} from 'react-bootstrap';


//Doughchart Legend
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;

        var fontSize = 3.125;
        ctx.font = "600 " + fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#9c9fa6";

        var text = chart.config.data.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
    }
});


// Carousel
var performanceOverview = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};


var detailedReports = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: 1,
                    task: 'Level up for Antony',
                    isCompleted: false
                },
                {
                    id: 2,
                    task: 'Follow up of team zilla',
                    isCompleted: true
                },
                {
                    id: 3,
                    task: 'Project meeting with CEO',
                    isCompleted: false
                },
                {
                    id: 4,
                    task: 'Duplicate a project for new customer',
                    isCompleted: true
                },
                {
                    id: 5,
                    task: 'Meeting with Urban Team',
                    isCompleted: false
                }
            ],
            inputValue: '',
        }
        this.statusChangedHandler = this.statusChangedHandler.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    statusChangedHandler(event, id) {

        //const todoIndex = this.state.todos.findIndex( t => t.id === id );
        const todo = {...this.state.todos[id]};
        todo.isCompleted = event.target.checked;

        const todos = [...this.state.todos];
        todos[id] = todo;

        this.setState({
            todos: todos
        })
    }

    addTodo(event) {
        event.preventDefault();

        const todos = [...this.state.todos];
        todos.unshift({
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            task: this.state.inputValue,
            isCompleted: false

        })

        this.setState({
            todos: todos,
            inputValue: ''
        })
    }

    removeTodo(index) {
        const todos = [...this.state.todos];
        todos.splice(index, 1);

        this.setState({
            todos: todos
        })
    }

    inputChangeHandler(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    SalesReportData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: 'Offline Sales',
            data: [480, 230, 470, 210, 330],
            backgroundColor: '#ffc100'
        },
            {
                label: 'Online Sales',
                data: [400, 340, 550, 480, 170],
                backgroundColor: '#f5a623'
            }
        ]
    };
    SalesReportOptions = {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 0
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                    min: 0,
                    max: 500
                }
            }],
            xAxes: [{
                stacked: false,
                ticks: {
                    beginAtZero: true,
                    fontColor: "#9fa0a2"
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: false
                },
                barPercentage: 1
            }]
        },
        legend: {
            display: false
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };
    ordersChartData = {
        labels: ["10", "", "", "20", "", "", "30", "", "", "40", "", "", "50", "", "", "60", "", "", "70"],
        datasets: [
            {
                data: [200, 480, 700, 600, 620, 350, 380, 350, 850, "600", "650", "350", "590", "350", "620", "500", "990", "780", "650"],
                borderColor: [
                    '#248afd'
                ],
                borderWidth: 3,
                fill: false,
                label: "Orders"
            },
            {
                data: [400, 450, 410, 500, 480, 600, 450, 550, 460, "560", "450", "700", "450", "640", "550", "650", "400", "850", "800"],
                borderColor: [
                    '#ff4747'
                ],
                borderWidth: 3,
                fill: false,
                label: "Downloads"
            }
        ]
    };
    ordersChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            filler: {
                propagate: false
            }
        },
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    display: true,
                    padding: 10
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: '#eeeeee'
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    display: true,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 200,
                    min: 200,
                    max: 1200,
                    padding: 18
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        },
        elements: {
            line: {
                tension: .35
            },
            point: {
                radius: 0
            }
        }
    };
    northAmericaData = {
        datasets: [{
            data: [100, 50, 50],
            backgroundColor: [
                "#71c016", "#ffc100", "#248afd",
            ],
            borderColor: "rgba(0,0,0,0)"
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Pink',
            'Blue',
            'Yellow',
        ],
        text: '90',
    };
    northAmericaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
            arc: {
                borderWidth: 4
            }
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        },
    };
    southAmericaData = {
        datasets: [{
            data: [60, 70, 70],
            backgroundColor: [
                "#ffc100", "#248afd", "#71c016"
            ],
            borderColor: "rgba(0,0,0,0)"
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Pink',
            'Blue',
            'Yellow',
        ],
        text: '76',
    };
    southAmericaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
            arc: {
                borderWidth: 4
            }
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        },
    };

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
                                    <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
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
                                    <i className="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
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
                                    <i className="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
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
                                    <i className="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
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