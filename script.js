const playerFactory = (name, sign) => {
  return { name, sign };
};

const gameBoard = (() => {
  const Array = ["", "", "", "", "", "", "", "", ""];
  return {
    Array,
  };
})();

const displayController = (() => {
  const player1 = playerFactory("player1", "X");
  const player2 = playerFactory("player2", "O");
  let player;
  const gameBoardDisplay = document.querySelector(".gameBoard");
  const displayArray = () => {
    console.log(gameBoard.player);
    for (let i = 0; i < gameBoard.Array.length; i++) {
      let XO = document.createElement("div");
      XO.textContent = gameBoard.Array[i];
      XO.setAttribute("class", "XO");
      XO.setAttribute("id", i);
      XO.addEventListener("click", () => {
        if (XO.textContent == "") {
          if (player == player1) {
            player = player2;
          } else {
            player = player1;
          }
          XO.textContent = player.sign;
        }
      });
      gameBoardDisplay.appendChild(XO);
    }
  };
  return { displayArray };
})();
