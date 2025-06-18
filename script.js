const GameFigures = ["🪨", "📄", "✂️"];
const UserChoice = document.querySelectorAll("#userChoice")
const userHand = document.getElementById("userHand");
const computerHand = document.getElementById("ComputerHand");
const userMarks = document.getElementById("userMarks");
const computerMarks = document.getElementById("computerMarks");
const CommentArea = document.getElementById("CommentArea");
const loader = document.querySelectorAll("#loader");

userMarks.innerHTML = "0";
computerMarks.innerHTML = "0";
let userScore = 0;
let computerScore = 0;


function FigureGenerator() {
    randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return (GameFigures[randomNumber]);
}


function GameStart() {
    userHand.style.display = "none";
    computerHand.style.display = "none";
    loader.forEach(load => { load.style.display = "block" });
    setTimeout(() => {
        computerHand.innerHTML = FigureGenerator();
        checkWinner();
        computerHand.style.display = "block";
        userHand.style.display = "block";
        loader.forEach(load => { load.style.display = "none" });
    }, 1000);

}

UserChoice.forEach(btn => {
    btn.addEventListener("click", () => {
        userHand.innerHTML = "";
        console.log(`button clicked ${UserChoice.innerText}`);
        userHand.innerHTML = btn.innerText;
        GameStart();
    });
});


function checkWinner() {
    if ((userHand.innerHTML === "🪨") && (computerHand.innerHTML === "✂️")) {
        userScore++;
        userMarks.innerHTML = userScore;
        CommentArea.innerText = `User wins 🎉 🏆 `;
    }
    else if ((userHand.innerHTML === "✂️") && (computerHand.innerHTML === "🪨")) {
        computerScore++;
        computerMarks.innerHTML = computerScore;
        CommentArea.innerText = `Computer wins 🎉 🏆 `;
    }
    else if ((userHand.innerHTML === "✂️") && (computerHand.innerHTML === "📄")) {
        userScore++;
        userMarks.innerHTML = userScore;
        CommentArea.innerText = `User wins 🎉 🏆 `;
    }
    else if ((userHand.innerHTML === "📄") && (computerHand.innerHTML === "✂️")) {
        computerScore++;
        computerMarks.innerHTML = computerScore;
        CommentArea.innerText = `Computer wins 🎉 🏆 `;
    }
    else if ((userHand.innerHTML === "📄") && (computerHand.innerHTML === "🪨")) {
        userScore++;
        userMarks.innerHTML = userScore;
        CommentArea.innerText = `User wins 🎉 🏆 `;
    }
    else if ((userHand.innerHTML === "🪨") && (computerHand.innerHTML === "📄")) {
        computerScore++;
        computerMarks.innerHTML = computerScore;
        CommentArea.innerText = `User wins 🎉 🏆 `;
    }
    else if ((userHand.innerHTML === "🪨") && (computerHand.innerHTML === "🪨")) {
        userScore++;
        userMarks.innerHTML = userScore;
        computerScore++;
        computerMarks.innerHTML = computerScore;
        CommentArea.innerText = ` Draw 🎉 🤝`;
    }
    else if ((userHand.innerHTML === "📄") && (computerHand.innerHTML === "📄")) {
        userScore++;
        userMarks.innerHTML = userScore;
        computerScore++;
        computerMarks.innerHTML = computerScore;
        CommentArea.innerText = ` Draw 🎉 🤝`;
    }
    else if ((userHand.innerHTML === "✂️") && (computerHand.innerHTML === "✂️")) {
        userScore++;
        userMarks.innerHTML = userScore;
        computerScore++;
        computerMarks.innerHTML = computerScore;
        CommentArea.innerText = `Draw 🎉 🤝`;
    }
}