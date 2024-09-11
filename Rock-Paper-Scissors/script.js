let users = 0;
let cs = 0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");

const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
}

const drawGame = () =>{
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081831";
}

const showWinner = (userWin,compChoice,userChoice) => {
    if(userWin){
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        users++;
        userScore.innerText = users;
    }
    else{
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        cs++;
        compScore.innerText = cs;
    }
}

const playGame  = (userChoice) => {
    const compChoice = genComputerChoice();
    console.log(userChoice);
    console.log(compChoice);
    if(compChoice==userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
            if(compChoice=="paper")
                userWin = false;
        }
        else if(userChoice=="paper"){
            if(compChoice=="scissors")
                userWin = false;
        }
        else if(userChoice=="scissors"){
            if(compChoice=="rock")
                userWin = false;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}

choices.forEach((box) => {
    box.addEventListener("click",() => {
        const userChoice = box.getAttribute("id");
        playGame(userChoice);
    })
})