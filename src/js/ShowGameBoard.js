export default class ShowGameBoard {
  constructor(size) {
    this.boardSize = size;
    this.gameBoard = document.querySelector('.game-board');
  }

  createBoard() {
    for (let i = 1; i <= this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.className = `hole hole${i}`;
      this.gameBoard.append(cell);
    }
  }

  showImage() {
    this.activeHole = 0;
    this.newHole = 0;
    const hole = document.querySelectorAll('.hole');
    const arrHole = Array.from(hole);

    const nextCell = () => {
      setTimeout(() => {
        arrHole[this.activeHole].classList.remove('hole_has-goblin');
        this.activeHole = Math.floor(Math.random() * arrHole.length);
        arrHole[this.activeHole].classList.add('hole_has-goblin');
        nextCell();
      }, 1000);
    };

    nextCell();
  }

  showBoard() {
    this.createBoard();
    this.showImage();
  }
}
