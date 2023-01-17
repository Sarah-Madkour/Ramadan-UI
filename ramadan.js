let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountain3=document.getElementById('mountain3');
let mountain4=document.getElementById('mountain4');
let river=document.getElementById('river');
let boat=document.getElementById("boat");
let mountain7=document.getElementById('mountain7');
let ramadan=document.getElementById('ramadan');

window.onscroll = function(){
    let value=scrollY;
    stars.style.left=value + "px";
    moon.style.top=value *4 + "px";
    mountain3.style.top= value*2 + "px";
    mountain4.style.top= value*1.5 + "px";
    river.style.top= value + "px";
    boat.style.top= value + "px";
    boat.style.left= value*5 + "px";
    ramadan.style.fontSize= value + "px";
    if(scrollY >= 50){
        ramadan.style.fontSize= 50 + "px";
        ramadan.style.position="fixed";
        if(scrollY>=370){
            ramadan.style.display="none";
        }else{
            ramadan.style.display="block";
        }
    }
}