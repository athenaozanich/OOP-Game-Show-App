/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", () => {//Start game with addEventListener() on start game button
  game.startGame();
});

qwerty.addEventListener("click", (e) => {//Use event delegation listen for button, then compare with phrase letters
  if ( e.target.type === "submit" ){ 
    game.handleInteraction(e.target);
  }
});
document.addEventListener('keyup', (e) => {
  const buttons = document.querySelectorAll("#qwerty button");
  buttons.forEach(button => {
    if(e.key === button.innerHTML){
      game.handleInteraction(button);
    }
  });
});