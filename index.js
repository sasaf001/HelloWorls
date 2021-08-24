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
            selectDrop.innerHTML = output;
        }).catch(err => {
            console.log(err)
        })

})
var selectland = document.getElementById('countries');
var submitbtn = document.getElementById('suchCountry');


submitbtn.onclick = function() {
    document.getElementById("land").innerHTML = selectland.value;
    document.getElementById("leute").innerHTML = "1";
    document.getElementById("heil").innerHTML = "2";
    document.getElementById("tod").innerHTML = "3";
}


const tarikh = new Date();
document.getElementById("datum").innerHTML = tarikh.toDateString();*/
fetch("https://covid-193.p.rapidapi.com/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "fc2160d35amsh279ce92aef9439fp1d6d32jsned4ac5acd398"
        }
    })
    .then(response => {
        console.log(response);
    })
    .then({

    })
    .catch(err => {
        console.error(err);
    });