let firstNumberEle = document.getElementById('firstNumber');
let secondNumberEle = document.getElementById('secondNumber');
let userInputEle = document.getElementById('userInput');
let gameResultEle = document.getElementById('gameResult');

function buttonRestart(){
    let firstRandomNumber = Math.random()*100;
    firstRandomNumber = Math.ceil(firstRandomNumber);
    firstNumberEle.textContent = firstRandomNumber;

    let secondRandomNumber = Math.random()*100;
    secondRandomNumber = Math.ceil(secondRandomNumber);
    secondNumberEle.textContent = secondRandomNumber;
    gameResultEle.textContent ="";
    userInputEle.value="";

}
buttonRestart();

function buttonCheck(){
    let firstRandomNumber = parseInt(firstNumberEle.textContent);
    let secondRandomNumber = parseInt(secondNumberEle.textContent);
    let input = parseInt(userInputEle.value);
    let sum= firstRandomNumber + secondRandomNumber;
    if(sum === input){
        gameResultEle.textContent ="Congratualtions! You got it right";
        gameResultEle.style.backgroundColor ="#0282a0f";
    } else{
        gameResultEle.textContent="Please Try again!";
        gameResultEle.style.backgroundColor="#1e217c";
    }
}
