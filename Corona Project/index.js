document.getElementById("bt1").addEventListener("click" , function (){
    let BASE_URL = (" https://data.covid19india.org/v4/min/data.min.json");
    fetch(BASE_URL).then((res)=>{
        return res.json()
    }).then((json)=>{  
        displayData(json)
        console.log(json);
    })
})
function displayData(data){
    let input = document.getElementById("in1").value
    let positive = document.getElementById("p_case") 
    positive. innerHTML = data[input].total.confirmed
    let recover = document.getElementById("r_case")
    recover.innerHTML = data[input].total.recovered
    let deceas = document.getElementById("d_case")
    deceas.innerHTML = data[input].total.deceased
}