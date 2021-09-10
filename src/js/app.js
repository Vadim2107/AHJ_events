import GameBoard from './GameBoard';
import GameLogic from './GameLogic';

const board = new GameBoard(4);
board.showImage();
// eslint-disable-next-line no-unused-vars
const logic = new GameLogic(board);
