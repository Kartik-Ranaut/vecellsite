let sun = document.querySelector(".sun");
let water = document.querySelector(".water");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let sunstyle= window.getComputedStyle(sun);
let waterstyle=window.getComputedStyle(water);
let bar1style=window.getComputedStyle(bar1);
let bar2style=window.getComputedStyle(bar2);
let parallax=document.querySelector("#home")
let id=setInterval(dark,10000);
let a=0;
function dark(){
    a++;
    if(a%2==0){
        water.style.filter="grayscale(100%)";
        // parallax.style.backgroundColor="#2c292937";
        }
    else{
        
        water.style.filter="grayscale(0%)"
    }
}