document.querySelector('#btn').addEventListener('click', function() {
const randomNumber1 = Math.floor(Math.random() * 5) ;
const randomNumber2= Math.floor(Math.random() * 5) ;
var dice_imgs =["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];//Array of images
var player1=document.querySelector('.img1').src="images/"+dice_imgs[randomNumber1];
var player2=document.querySelector('.img2').src="images/"+dice_imgs[randomNumber2];

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerText='✌️ Player 1 Wins!';
}
else if(randomNumber2>randomNumber1){
   document.querySelector('h1').innerText='Player 2 Wins! ✌️';
}
else{
    document.querySelector('h1').innerText='Draw! 🤝';
}
 
});