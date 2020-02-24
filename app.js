(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCNFG3Kr2aQ-Nc6LcYA6dH0VAQoCt4bq8E",
        authDomain: "ena-551a2.firebaseapp.com",
        databaseURL: "https://ena-551a2.firebaseio.com",
        projectId: "ena-551a2",
        storageBucket: "ena-551a2.appspot.com",
        messagingSenderId: "310374713039",
        appId: "1:310374713039:web:520a6a5d7c0bf1cba1d9ba",
        measurementId: "G-VT91GDDL84"
    };
    firebase.initializeApp(firebaseConfig);
}());

const db = firebase.database();

// pressure
if (document.getElementById("pressurePlot")) {
    const pressureArray = db.ref().child("sensors/BMP280/data/pressure/array");
    var pressurePlot = document.getElementById("pressurePlot");
    var pressurectx = pressurePlot.getContext('2d');
    let pressureChart;
    Chart.defaults.global.animation = 0;
    pressureArray.on("value", snap => {
        pressureChart = new Chart(pressurectx, {
            type: 'line',
            data: {
                labels: [...Array(snap.val().length).keys()],
                datasets: [{
                    label: 'Pressure(t)',
                    data: snap.val(),
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(155, 199, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                layout: {
                    title: {
                        display: true,
                        text: 'Pressure'
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'rgba(155, 199, 132, 1)'
                        }
                    },
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }]
                },
                elements: {
                    point:{
                        radius: 0
                    }
                }
            }
        });
        pressureChart.canvas.parentNode.style.height = window.innerHeight / 4 + "px";
        pressureChart.canvas.parentNode.style.width = window.innerWidth / 4 + "px";
    });

}

//temperature
if (document.getElementById("tempPlot")) {
    const tempArray = db.ref().child("sensors/BMP280/data/temperature/array");
    var tempPlot = document.getElementById("tempPlot");
    var tempctx = tempPlot.getContext('2d');
    let tempChart;
    Chart.defaults.global.animation = 0;
    tempArray.on("value", snap => {
        tempChart = new Chart(tempctx, {
            type: 'line',
            data: {
                labels: [...Array(snap.val().length).keys()],
                datasets: [{
                    label: 'Temperature(t)',
                    data: snap.val(),
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(155, 199, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                layout: {
                    title: {
                        display: true,
                        text: 'Temperature'
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'rgba(155, 199, 132, 1)'
                        }
                    },
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }]
                },
                elements: {
                    point:{
                        radius: 0
                    }
                }
            }
        });
        tempChart.canvas.parentNode.style.height = window.innerHeight / 4 + "px";
        tempChart.canvas.parentNode.style.width = window.innerWidth / 4 + "px";
    });
}

// height
if (document.getElementById("heightPlot")) {
    const heightArray = db.ref().child("sensors/BMP280/data/height/array");
    var heightPlot = document.getElementById("heightPlot");
    var heightctx = heightPlot.getContext('2d');
    let heightChart;
    Chart.defaults.global.animation = 0;
    heightArray.on("value", snap => {
        heightChart = new Chart(heightctx, {
            type: 'line',
            data: {
                labels: [...Array(snap.val().length).keys()],
                datasets: [{
                    label: 'Height(t)',
                    data: snap.val(),
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(155, 199, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                layout: {
                    title: {
                        display: true,
                        text: 'Height'
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'rgba(155, 199, 132, 1)'
                        }
                    },
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }]
                },
                elements: {
                    point:{
                        radius: 0
                    }
                }
            }
        });
        heightChart.canvas.parentNode.style.height = window.innerHeight / 4 + "px";
        heightChart.canvas.parentNode.style.width = window.innerWidth / 4 + "px";
    });
}

// weight = 2.5; //kg
// density = 0; //kgm-3
// wingArea = 0; //m2
// velocity = sqrt(2*weight*(1/(density*wingArea*CLMAX))); //ms-1 = Vinf (static atmosphere)
// CL = 2*weight*(1/(density*pow(Vinf, 2)*wingArea));
// lift = 0.5*(density*pow(velocity, 2)*wingArea*CLMAX);
// thrust = 0;
// drag = 0; //done