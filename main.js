let numbers=document.querySelector(".numbers");
let math=document.querySelector(".math");
let input=document.querySelector(".value");
let span=document.querySelectorAll(".clear");
let num0=document.querySelector(".num-0");
let num1=document.querySelector(".num-1");
let num2=document.querySelector(".num-2");
let num3=document.querySelector(".num-3");
let num4=document.querySelector(".num-4");
let num5=document.querySelector(".num-5");
let num6=document.querySelector(".num-6");
let num7=document.querySelector(".num-7");
let num8=document.querySelector(".num-8");
let num9=document.querySelector(".num-9");
let numDiv=document.querySelector(".num-div");
let numMul=document.querySelector(".num-mul");
let numPlus=document.querySelector(".num-plus");
let numMinus=document.querySelector(".num-minus");
let numDot=document.querySelector(".num-dot");
let numEqual=document.querySelector(".num-equal");
let backLetter=document.querySelector(".back-letter");

span[0].onclick=function (){
   input.value="";
}
num0.onclick=function (){
   input.value+="0";
}
num1.onclick=function (){
   input.value+="1";
}
num2.onclick=function (){
   input.value+="2";
}
num3.onclick=function (){
   input.value+="3";
}
num4.onclick=function (){
   input.value+="4";
}
num5.onclick=function (){
   input.value+="5";
}
num6.onclick=function (){
   input.value+="6";
}
num7.onclick=function (){
   input.value+="7";
}
num8.onclick=function (){
   input.value+="8";
}
num9.onclick=function (){
   input.value+="9";
}
numDiv.onclick=function (){
   input.value+="/";
}
numEqual.onclick=function (){
   input.value=eval(input.value);
}
numMinus.onclick=function (){
   input.value+="-";
}
numMul.onclick=function (){
   input.value+="*";
}
numPlus.onclick=function (){
   input.value+="+";
}
numDot.onclick=function (){
   input.value+=".";
}
backLetter.onclick=function(){
   input.value=input.value.slice(0,-1);
}