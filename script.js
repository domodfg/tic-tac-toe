const playerFactory = (name, sign, winStatus) => {
  return { name, sign, winStatus };
};

const gameBoard = (() => {
  const player1 = playerFactory("player1", "X");
  const player2 = playerFactory("player2", "O");
  const Array = ["", "", "", "", "", "", "", "", ""];
  const chooseWinner = () => {
    if (Array[i] == player1.sign) {
      player1.winStatus = "win";
    } else player2.winStatus = "win";
  };
  const judge = () => {
    for (i = 0; i <= 6; i += 3) {
      if (
        Array[i] == Array[i + 1] &&
        Array[i] == Array[i + 2] &&
        Array[i] != ""
      ) {
        chooseWinner();
      }
    }
    for (i = 0; i <= 3; i++) {
      if (
        Array[i] == Array[i + 3] &&
        Array[i] == Array[i + 6] &&
        Array[i] != ""
      ) {
        chooseWinner();
      }
    }
    for (i = 2; i <= 2; i++) {
      if (
        Array[i] == Array[i + 2] &&
        Array[i] == Array[i + 4] &&
        Array[i] != ""
      ) {
        chooseWinner();
      }
    }
    for (i = 0; i <= 0; i++) {
      if (
        Array[i] == Array[i + 4] &&
        Array[i] == Array[i + 8] &&
        Array[i] != ""
      ) {
        chooseWinner();
      }
    }
  };
  return {
    Array,
    player1,
    player2,
    judge,
  };
})();

const displayController = (() => {
  let player;
  const gameBoardDisplay = document.querySelector(".gameBoard");
  const result = document.querySelector(".result");
  const displayWinner = () => {
    if (gameBoard.player1.winStatus == "win") {
      result.textContent = gameBoard.player1.name + " win";
    } else if (gameBoard.player2.winStatus == "win")
      result.textContent = gameBoard.player2.name + " win";
  };
  const displayArray = () => {
    for (let i = 0; i < gameBoard.Array.length; i++) {
      let XO = document.createElement("div");
      XO.textContent = gameBoard.Array[i];
      XO.setAttribute("class", "XO");
      XO.setAttribute("id", i);
      XO.addEventListener("click", (e) => {
        if (
          XO.textContent == "" &&
          gameBoard.player1.winStatus != "win" &&
          gameBoard.player2.winStatus != "win"
        ) {
          if (player == gameBoard.player1) {
            player = gameBoard.player2;
          } else {
            player = gameBoard.player1;
          }
          XO.textContent = player.sign;
          gameBoard.Array[e.target.id] = player.sign;
          gameBoard.judge();
          displayWinner();
        }
      });
      gameBoardDisplay.appendChild(XO);
    }
  };
  const clearBoard = () => {
    player = gameBoard.player2;
    result.textContent = "";
    gameBoard.player1.winStatus = "";
    gameBoard.player2.winStatus = "";
    const allXO = document.querySelectorAll(".XO");
    allXO.forEach((XO) => (XO.textContent = ""));
    for (let i = 0; i < gameBoard.Array.length; i++) {
      gameBoard.Array[i] = "";
    }
  };
  return { displayArray, clearBoard };
})();

const play = document.querySelector(".play");
const reset = document.querySelector(".reset");
play.addEventListener("click", displayController.displayArray);
reset.addEventListener("click", displayController.clearBoard);
