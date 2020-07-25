var random1=Math.floor(Math.random()*6)+1;
var dice1="dice"+random1+".png";
var randomdicesrc="images/"+ dice1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdicesrc);

var random2=Math.floor(Math.random()*6)+1;
var dice2="dice"+random2+".png";
var randomdicesrc2="images/"+dice2;
var img2=document.querySelectorAll("img")[1].setAttribute("src",randomdicesrc2);

if(random1>random2)
{
	document.querySelector("h1").innerHTML="Player One wins😁";

}
else if(random1==random2){
	document.querySelector("h1").innerHTML="Draw✌";
}
else{
	document.querySelector("h1").innerHTML="Player Two wins😁";
}