var limitTime= 60;
var hit2;
var clicknum1;
var score1=0;



function makeBubble(){
    var clutter="";

    for(let i=0; i<=90-16; i++){
        var mn= Math.round(Math.random()*10)
        clutter +=`<div class="bubble">${mn}</div>`;
    }
    document.querySelector("#panelBtm").innerHTML=clutter;
}
function timer1(){
        var letTime = setInterval(function (){
        if(0<limitTime){
        limitTime--;
        document.querySelector("#timer").textContent= limitTime; 
    }
    else{
        clearInterval(letTime);
        document.querySelector("#panelBtm").innerHTML=`<h1 style="font-size: 80px;">Game Over<h1/>`;
    }
     }, 1000); 
    

}
function newHit(){
    hit2= Number(Math.round(Math.random()*10));
    document.querySelector("#hitNw").innerHTML=hit2;
    console.log(hit2);
}
function getScore(){
     score1+=10;
     document.querySelector("#scoreing").textContent=score1;
}
document.querySelector("#panelBtm").addEventListener("click" , function(details){
    clicknum1 = Number(details.target.textContent); 
    console.log(clicknum1);
    if(hit2===clicknum1){
        getScore();
        newHit();
        makeBubble();
    }
})




makeBubble();
timer1();
newHit();



