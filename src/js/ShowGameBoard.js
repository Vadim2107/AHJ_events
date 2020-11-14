import img from '../img/goblin.png';

export default class ShowGameBoard {
  constructor() {
    this.gameBoard = document.getElementsByClassName('game-board');
  }

  createBoard() {
    for (let i = 1; i < 5; i += 1) {
      this.row = document.createElement('div');
      this.row.className = `row_${i}`;
      this.gameBoard[0].append(this.row);
      this.gameBoard.style = 'cursor: url("../img/hammer.png"), auto';
      for (let j = 1; j < 5; j += 1) {
        const col = document.createElement('div');
        col.className = `column col_${j}`;
        this.row.append(col);
        col.style = 'width: 120px; height: 120px; background: rgb(77, 77, 77); display: inline-block; border: 4px solid black; border-radius: 50%; margin-right: 8px';
      }
    }
  }

  createImage() {
    this.image = document.createElement('img');
    this.image.style = 'display: flex;';
    this.image.src = img;
  }

  showImage() {
    this.holeRow = 0;
    this.holeCol = 0;

    const rowRandom = Math.floor(Math.random() * 4 + 1);
    const colRandom = Math.floor(Math.random() * 4 + 1);

    if (`${this.holeRow}${this.holeCol}` === `${rowRandom}${colRandom}`) {
      this.showImage();
    } else {
      this.holeRow = rowRandom;
      this.holeCol = colRandom;
      const rowImage = document.getElementsByClassName(`row_${this.holeRow}`)[0];
      const colImage = rowImage.getElementsByClassName(`col_${this.holeCol}`)[0];
      colImage.append(this.image);
    }
  }

  showBoard() {
    this.createBoard();
    this.createImage();
    setInterval(() => { this.showImage(); }, 1000);
  }
}
