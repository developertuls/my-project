let marufIndex=0;


const showsliders=(index)=>{
document.getElementById("slides");
const total=slides.children.length


if(index>=total){
marufIndex = 0;
}
else if(index<0){
marufIndex = total-1;
}
else{
  marufIndex=index;
}

slides.style.transform =`translateX(${-marufIndex * 100}%)`;








}




const prevslide=()=>{
  showsliders(marufIndex+1)

}
const nextslide =() =>{
  showsliders(marufIndex-1)
  

}

// showsliders();
// nextslide();
// prevslide();

function autosliders(){
 deletInterval=setInterval(timer,3000) ;
 function timer(){
    nextslide();
 } 
}
autosliders();