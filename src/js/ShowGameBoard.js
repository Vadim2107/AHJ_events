export default class ShowGameBoard {
  constructor() {
    this.boardSize = 4;
    this.gameBoard = document.getElementsByClassName('game-board');
  }

  createBoard() {
    for (let i = 1; i <= this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('hole');
      cellEl.classList.add(`hole${i}`);
      this.gameBoard[0].append(cellEl);
    }
  }

  showImage() {
    this.activeHole = 0;
    this.newHole = 0;
    const hole = document.getElementsByClassName('hole');
    const arrHole = Array.from(hole);
    arrHole[0].classList.add('hole_has-goblin');

    const deactivateHole = () => {
      arrHole[this.activeHole].classList.remove('hole_has-goblin');
    };

    const activateHole = () => {
      arrHole[this.activeHole].classList.add('hole_has-goblin');
    };

    const next = () => {
      setTimeout(() => {
        deactivateHole();
        while (this.activeHole === this.newHole) {
          this.activeHole = Math.floor(Math.random() * arrHole.length);
        }
        activateHole();
        this.newHole = this.activeHole;
        next();
      }, 1000);
    };

    next();
  }

  showBoard() {
    this.createBoard();
    this.showImage();
  }
}
