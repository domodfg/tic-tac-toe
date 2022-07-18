const playerFactory = (name, sign) => {
  return { name, sign };
};

const gameBoard = (() => {
  const player1 = playerFactory("player1", "X");
  const player2 = playerFactory("player2", "O");
  const Array = ["", "", "", "", "", "", "", "", ""];
  return {
    Array,
    player1,
    player2
  };
})();

const displayController = (() => {
  let player;
  const gameBoardDisplay = document.querySelector(".gameBoard");
  const displayArray = () => {
    for (let i = 0; i < gameBoard.Array.length; i++) {
      let XO = document.createElement("div");
      XO.textContent = gameBoard.Array[i];
      XO.setAttribute("class", "XO");
      XO.setAttribute("id", i);
      XO.addEventListener("click", (e) => {
        if (XO.textContent == "") {
          if (player == gameBoard.player1) {
            player = gameBoard.player2;
          } else {
            player = gameBoard.player1;
          }
          XO.textContent = player.sign;
          gameBoard.Array[e.target.id]= player.sign;
        }
      });
      gameBoardDisplay.appendChild(XO);
    }
  };
  return { displayArray };
})();
