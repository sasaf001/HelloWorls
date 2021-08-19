/*$(document).ready(function(){
    init()

    function init(){
    var url ="https://api.covid19api.com/summary"

    
    var data=''
    
    $.get(url,function(data){
        console.log(data.Global)

        data=`
        
        <td></td>
        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.Totalrecovered}</td>
        <td>${data.Global.TotalDeaths}</td>
        

        `
        $("#data").html(data)
    })}
})
    function refreshData(){
        cleardata()
        init()
    }
    function clearData(){
        $('#data').empty()
    }

    

    const url = 'https://api.covid19api.com/summary';
    fetch(url)
    .then((response)=>{
        response.json()
        .then((result)=>{console.log('result', result)
        })
    })
    .catch(function(error){
        console.log(error)
       
    })
    const checkIpWrapper = document.getElementsByClassName('ip')[0];
*/
document.addEventListener('DOMContentLoaded',()=>{

    const selectDrop= document.getElementById('countries');
    
    fetch('https://restcountries.eu/rest/v2/all').then(res=>{
        return res.json();
    }).then(data =>{
        let output="";
        data.forEach(country => {
           output+= `<option value=${country.name}>${country.name}</option>`;
        })
        selectDrop.innerHTML=output;
        
        }).catch(err =>{
        console.log(err);
    })
    })

const checkIpBtn = document.getElementById('suchCountry'); 
    checkIpBtn.addEventListener('click' , function () {
        const thisElement = this;
        thisElement.setAttribute("disabled" , "disabled");
 
        const url = new XMLHttpRequest();
        url.open("GET","https://api.covid19api.com/summary");
        url.responseType = "json"
        url.onreadystatechange = function(e) {
      
            if (this.status === 200 && this.readyState == this.DONE){
      
                //thisElement.remove();
                //const table = document.querySelector(".ip table");
                table.classList.toggle('ds-none');
      
                const data = this.response;
                const countryData = [data.Countries.name, data.Global.TotalConfirmed , data.Global.TotalRecovered , data.TotalDeaths ]
      
                const tdTableElement = document.querySelectorAll('.ip table td');
      
                let counter = 0;
                for(const element of tdTableElement){
                    element.innerHTML = countryData[counter];
                    counter++;
                }
      
            }
                  
            else if(this.status < 200 && this.readyState == this.DONE){
                window.alert("erroe");
                console.error("ERR");
            }
        }
      
        url.send();
      
    });
  

const tarikh = new Date();
document.getElementById("datum").innerHTML = tarikh.toDateString();

