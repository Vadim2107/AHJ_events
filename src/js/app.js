import ShowGameBoard from './ShowGameBoard';
import PlayGame from './PlayGame';

const showGameBoard = new ShowGameBoard(4);
const playGame = new PlayGame();

showGameBoard.showBoard();
playGame.eventClick();
