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
    //covidnews();


}

async function func() {
    try {
        const api = await fetch('https://api.covid19api.com/summary');
        const data = await api.json();

        var arr = data.Countries;
        for (let i = 0; i < arr.length; i++) {
            var obj = arr[i].Country;
            var obj0 = arr[i].TotalConfirmed;
            var obj2 = arr[i].TotalRecovered;
            var obj3 = arr[i].TotalDeaths;
            var obj1 = selectland.value;
            if (obj == obj1) {


                (document.getElementById("leute").innerHTML = obj0) + (document.getElementById("heil").innerHTML = obj2) +
                (document.getElementById("tod").innerHTML = obj3);

                chart.data.datasets.forEach((dataset) => {
                    dataset.data.splice(0, yValues.length);
                    dataset.data.push(obj0, obj2, obj3);
                });
                chart.update();
                break;

            }

        }
    } catch (err) {
        console.log(err);
    }

}

/*function func1() {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.splice(0, yValues.length);
        dataset.data.push();

    });
    chart.update();
}*/
var xValues = ["TotalConfirmed", "Totalrecovered", "TotalDeaths"];
var yValues = [];


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

function covidnews() {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8fe0eb4ed0a14b118c1e5c5e048fe449')
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);

        })

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