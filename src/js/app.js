import ShowGameBoard from './ShowGameBoard';
import PlayGame from './PlayGame';

const showGameBoard = new ShowGameBoard();
const playGame = new PlayGame();
const board = showGameBoard.showBoard();
const play = playGame.eventClick();
setTimeout(board, 1000);
setTimeout(play, 1000);
// showGameBoard.showBoard();
// playGame.eventClick();
