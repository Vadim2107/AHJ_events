export default class GameBoard {
  constructor(size) {
    this.boardSize = size;
    this.cells = [];
    this.activeHole = 0;
    this.gameBoard = document.querySelector('.game-board');
    this.createBoard();
  }

  createBoard() {
    for (let i = 1; i <= this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.className = `hole hole-${i}`;
      this.gameBoard.append(cell);

      this.cells.push(cell);
    }
  }

  setNextCell() {
    const hole = document.querySelectorAll('.hole');
    const arrHole = Array.from(hole);

    arrHole[this.activeHole].classList.remove('hole_has-goblin');
    this.activeHole = Math.floor(Math.random() * arrHole.length);
    arrHole[this.activeHole].classList.add('hole_has-goblin');
  }

  showImage() {
    // setInterval(() => this.setNextCell(), 1000);
    this.setNextCell();
  }
}
