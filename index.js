/*document.addEventListener('DOMContentLoaded', () => {
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
        })
    selectDrop.innerHTML = output;
})

.catch(err => {
    console.log(err)
})


var selectland = document.getElementById('countries');
var submitbtn = document.getElementById('suchCountry');


submitbtn.onclick = function() {
    document.getElementById("land").innerHTML = selectland.value;
    document.getElementById("leute").innerHTML = "1";
    document.getElementById("heil").innerHTML = "2";
    document.getElementById("tod").innerHTML = "3";
}
let n = data.Countries.TotalConfirmed;
console.log(n);*/


var myHeaders = new Headers();
myHeaders.append("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
myHeaders.append("x-rapidapi-key", "fc2160d35amsh279ce92aef9439fp1d6d32jsned4ac5acd398");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
document.addEventListener('DOMContentLoaded', () => {
    const selectDrop = document.getElementById('countries');
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?=", requestOptions)

    .then(response => {
            return response.json();

        })
        .then(data => {
            console.log(data);
            let output = "";
            data.covid19Stats.forEach(country => {
                output += `<option value=${country.country}>${country.country}</option>`;
            })
        })
    selectDrop.innerHTML = output;
})

.catch(error => console.log('error', error));







var xValues = ["TotalConfirmed", "Totalrecovered", "TotalDeaths"];
var yValues = [55, 49, 44];
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





const tarikh = new Date();
document.getElementById("datum").innerHTML = tarikh.toDateString();