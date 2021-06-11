const gamesSummary ={
    numberOfGames: 0,
    wins:0,
    losses:0,
    draws:0,
}

const game={
    yourChoice:"",
    myChoice:"",
}

const hands = [...document.querySelectorAll('.icon')];

hands.forEach(hand=>hand.addEventListener("click",handSelection))

function handSelection(){
    hands.forEach(hand=>hand.style.color='black');
    game.yourChoice = this.dataset.option;
    this.style.color='red'
}

document.querySelector('.start').addEventListener('click',startGame);

const myChoiceIcon = document.getElementById('my-choice');

function myHandSelection(){
    myChoiceIcon.removeAttribute("class");
    const selectedHand = hands[Math.floor(Math.random()*hands.length)].dataset.option;
    if(selectedHand==="rock"){
        myChoiceIcon.classList.add("far");
        myChoiceIcon.classList.add("fa-hand-rock");
    }
    else if(selectedHand==="paper"){
        myChoiceIcon.classList.add("far");
        myChoiceIcon.classList.add("fa-hand-paper");
    }
    else{
        myChoiceIcon.classList.add("far");
         myChoiceIcon.classList.add("fa-hand-peace");
    }
    return selectedHand;
}

function checkResult(yourChoice, myChoice){
if(yourChoice===myChoice) return "draw";

else if((yourChoice === "paper" && myChoice === "rock") || (yourChoice === "rock" && myChoice === "scissors") || (yourChoice === "scissors" && myChoice === "paper")) {return "win"}

else{return "loss"}
}

function publishResult(you,me,result){
document.querySelector('span.games').textContent = ++gamesSummary.numberOfGames;
if(result==="win"){
document.querySelector('p.who-win').textContent = "you win!"
document.querySelector('p.who-win').style.color = "green"
document.querySelector('span.wins').textContent = ++gamesSummary.wins;
}
else if(result==="loss"){
document.querySelector('p.who-win').textContent = "you loose"
document.querySelector('p.who-win').style.color = "red"
document.querySelector('span.losses').textContent = ++gamesSummary.losses;
}
else{
document.querySelector('p.who-win').textContent = "draw"
document.querySelector('p.who-win').style.color = "grey"
document.querySelector('span.draws').textContent = ++gamesSummary.draws;
}
}


function startGame(){
    if(!game.yourChoice) return alert("Choose your hand!");
    game.myChoice=myHandSelection();
    const gameResult = checkResult(game.yourChoice, game.myChoice);
    publishResult(game.yourChoice, game.myChoice, gameResult);
}

