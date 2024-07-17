let pic = document.getElementsByClassName("img")
let index = 0 ;
function slides (index){
    for(let i = 0 ; i <pic.length;i++){
        pic[i].style.display = "none";
    }
    pic[index].style.display = "block";
}
function show (){
    setInterval(()=>{
        slides(index)
        index ++ ;
        if(index == pic.length){
            index = 0
        }
    },1500)
}
show();