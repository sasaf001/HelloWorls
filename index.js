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


        }).catch(err => {
            console.log(err)
        })

})
document.getElementById("suchCountry").addEventListener("click", myfunction);

function myfunction() {
    document.getElementById("land").innerHTML = getSelection(output);
}





/*const checkIpBtn = document.getElementById('suchCountry');
checkIpBtn.addEventListener('click', function() {
    const thisElement = this;
    //thisElement.setAttribute("disabled", "disabled");

    const url = new XMLHttpRequest();
    url.open("GET", "https://api.covid19api.com/summary");
    url.responseType = "json"
    url.onreadystatechange = function(e) {

        if (this.status === 200 && this.readyState == this.DONE) {

            //thisElement.remove();
            const table = document.querySelector(".ip table");
            table.classList.toggle('ds-none');

            const data = this.response;
            console.log(data)
            const countryData = [data.Countries[1].country, data.Global.TotalConfirmed, data.Global.TotalRecovered, data.TotalDeaths]

            const tdTableElement = document.querySelectorAll('.ip table td');

            let counter = 0;
            for (const element of tdTableElement) {
                element.innerHTML = countryData[counter];
                counter++;
            }

        } else if (this.status < 200 && this.readyState == this.DONE) {
            window.alert("erroe");
            console.error("ERR");
        }


    }
    url.send();

});*/
const tarikh = new Date();
document.getElementById("datum").innerHTML = tarikh.toDateString();