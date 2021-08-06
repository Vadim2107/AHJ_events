import ShowGameBoard from './ShowGameBoard';
import PlayGame from './PlayGame';

const showGameBoard = new ShowGameBoard();
const playGame = new PlayGame();
showGameBoard.showBoard();
playGame.eventClick();
