let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector('.img1').setAttribute('src','./images/dice'+randomNumber1+'.png');

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector('.img2').setAttribute('src','./images/dice'+randomNumber2+'.png');

let message;

if(randomNumber1==randomNumber2){
    message = 'Draw';
}
else if(randomNumber1 > randomNumber2){
    message = '🚩Player1 Wins';
}
else{
    message = 'Player2 Wins🚩';
}


document.querySelector('h1').textContent = message;
