document.querySelector("form").addEventListener("submit",todoFunc);
function todoFunc(event){
  event.preventDefault();

  let name = document.querySelector("#task").value
  let id = document.querySelector("#priority").value

  let tr = document.createElement("tr")
  let td1 = document.createElement("td")
  td1.innerHTML=name

  let td2 = document.createElement("td")
  td2.innerHTML=id
  if(id == "High"){
    td2.style.color='red';
  }
  else{
    td2.style.color='blue';
  }

  let td3 = document.createElement("td")
  td3.setAttribute("id","time")
  td3.innerHTML=id
  if(id == "High"){
    td3.innerHTML = "More"
    td3.style.color = "red"
  }else{
    td3.innerHTML = "Less"
    td3.style.color = "blue"
  }
  let btn = document.createElement("button")
  btn.setAttribute("id","delete_btn")
  btn.innerHTML="Delete"
  btn.addEventListener("click" , function(){
    td1.remove()
    td2.remove()
    td3.remove()
    btn.remove()
})

  tr.append(td1 , td2 , td3 , btn)
  document.querySelector("tbody").append(tr)
}

