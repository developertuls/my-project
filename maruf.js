



// slider ================================>


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



// autosliders ===========================================>

function autosliders(){
 deletInterval=setInterval(timer,3000) ;
 function timer(){
    nextslide();
 } 
}
autosliders();





 
   

//  neverefect ============================================>    
 const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



//   let design=" maruf web designer";
//   let design2 =document.getElementById("jkl");

//   let ds=0;
//   let isdelet=false;

//   const typeeffect=()=>{
// if(!isdelet && ds<=design.length){
//   design2.textContent=design.substring(0.,ds)
//   ds++;
// }
// else if(isdelet && ds>=0){
//    design2.textContent=design.substring(0.,ds)
//    ds--;
// }


// setTimeout(typeeffect,200)

// if(ds>design.length){
//   ds=true
// }
// else if(ds<0){
//   isdelet=false;
// }

//   }

  // typeeffect();



  // typeeffect2==========================>
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName("typewrite");
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite> .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };