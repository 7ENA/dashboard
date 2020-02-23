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
    var ctx = pressurePlot.getContext('2d');
    let pressureChart;
    Chart.defaults.global.animation = 0;
    pressureArray.on("value", snap => {
        pressureChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...Array(snap.val().length).keys()],
                datasets: [{
                    label: 'Pressure(t)',
                    data: snap.val(),
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(255, 99, 132, 1)',
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
                            fontColor: 'rgb(255, 99, 132, 1)'
                        }
                    },
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
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
    var ctx = tempPlot.getContext('2d');
    let tempChart;
    Chart.defaults.global.animation = 0;
    tempArray.on("value", snap => {
        tempChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...Array(snap.val().length).keys()],
                datasets: [{
                    label: 'Temperature(t)',
                    data: snap.val(),
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(255, 99, 132, 1)',
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
                            fontColor: 'rgb(255, 99, 132, 1)'
                        }
                    },
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
        tempChart.canvas.parentNode.style.height = window.innerHeight / 4 + "px";
        tempChart.canvas.parentNode.style.width = window.innerWidth / 4 + "px";
    });
}