$(document).ready(function(){
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
            
            })
        }).catch(err =>{
            console.log(err);
        })

    

const tarikh = new Date();
document.getElementById("datum").innerHTML = tarikh.toDateString();

