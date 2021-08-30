document.addEventListener('DOMContentLoaded', () => {
    const selectDrop = document.getElementById('countries');

    fetch('https://api.covid19api.com/summary')
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            let output = "";

            data.Countries.forEach(country => {
                output += `<option value=${country.Country}>${country.Country}</option>`;
            })

            selectDrop.innerHTML = output;
        })
        .catch(err => {
            console.log(err)
        })
})

var selectland = document.getElementById('countries');
var submitbtn = document.getElementById('suchCountry');


submitbtn.onclick = function() {
    document.getElementById("land").innerHTML = selectland.value;
    func();
    func1();

}

async function func() {

    const api = await fetch('https://api.covid19api.com/summary');
    const data = await api.json();
    //console.log(data);
    var y1;
    var y2;
    var y3;

    var arr = data.Countries;
    for (let i = 0; i < arr.length; i++) {
        var obj = arr[i].Country;
        var obj0 = arr[i].TotalConfirmed;
        var obj2 = arr[i].TotalRecovered;
        var obj3 = arr[i].TotalDeaths;
        var obj1 = selectland.value;
        if (obj == obj1) {
            y1 = obj0;
            y2 = obj2;
            y3 = obj3;

            return (document.getElementById("leute").innerHTML = y1) + (document.getElementById("heil").innerHTML = y2) +
                (document.getElementById("tod").innerHTML = y3);



        } else {
            console.log("Error");
        }


    }

}


var xValues = ["TotalConfirmed", "Totalrecovered", "TotalDeaths"];
var yValues = [1, 1, 1];
var yValues1 = [11, 11, 10];

var barColors = [
    "#2b5797",
    "#00aba9",
    "#b91d47"
];
//update az tarighe data table
const chart = new Chart("myChart", {

    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Statistics of Corona on Pie Chart"

        }
    }
});

function func1() {
    chart.data.datasets.forEach((dataset) => {
        //dataset.data.splice(0, yValues.length);
        dataset.data.push(yValues = y1, yValues = y2, yValues = y3);

    });
    chart.update();
}

const tarikh = new Date();
document.getElementById("datum").innerHTML = tarikh.toDateString();



/*var myHeaders = new Headers();
myHeaders.append("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
myHeaders.append("x-rapidapi-key", "fc2160d35amsh279ce92aef9439fp1d6d32jsned4ac5acd398");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .then(function(obj) {
            console.log(obj);
        )
        .catch(error => console.log('Somthing is erong', error));*/