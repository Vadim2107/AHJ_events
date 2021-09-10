import GameBoard from './GameBoard';

export default class GameLogic extends GameBoard {
  constructor(board) {
    super();
    this.board = board;
    this.eventClick();
    this.dead = 0;
    this.lost = 0;
    this.clickOrNo = true;
  }

  scoring(score) {
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    if (score) {
      // eslint-disable-next-line no-plusplus
      this.dead += 1;
      dead.textContent = this.dead;
    } else {
    // eslint-disable-next-line no-plusplus
      this.lost += 1;
      lost.textContent = this.lost;
      if (this.lost === 5) {
        // eslint-disable-next-line no-alert
        alert(`GAME OVER!!! Your account ${this.dead}`);
        lost.textContent = 0;
        dead.textContent = 0;
        this.lost = 0;
        this.dead = 0;
      }
    }
  }

  eventClick() {
    setInterval(() => {
      if (this.clickOrNo) {
        this.clickOrNo = false;
      } else {
        this.scoring(false);
      }
    }, 1000);

    this.board.cells.forEach((element) => {
      element.addEventListener('click', (event) => {
        this.clickOrNo = true;
        if (element.classList.contains('hole_has-goblin')) {
          this.scoring(true);
          event.currentTarget.classList.remove('hole_has-goblin');
        } else {
          this.scoring(false);
        }
      });
    });
  }
}
