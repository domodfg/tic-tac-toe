const gameBoard = (() => {
  const Array = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  return {
    Array,
  };
})();

const playerFactory = (name) => {
  return { name };
};

const displayController = (() => {
  const gameBoardDisplay = document.querySelector(".gameBoard");
  const generateContents = () => {
    for (let i = 0; i < gameBoard.Array.length; i++) {
      let content = document.createElement("div");
      content.textContent=gameBoard.Array[i];
      content.setAttribute('class', 'XO')
      gameBoardDisplay.appendChild(content);
    }
  };
  return { generateContents };
})();
