import GameBoard from './GameBoard';

export default class GameLogic extends GameBoard {
  constructor(board) {
    super();
    this.board = board;
    this.eventClick();
    this.dead = 0;
    this.lost = 0;
  }

  eventClick() {
    this.board.cells.forEach((element) => {
      element.addEventListener('click', (event) => {
        const dead = document.getElementById('dead');
        const lost = document.getElementById('lost');
        if (element.classList.contains('hole_has-goblin')) {
          this.dead += 1;
          dead.textContent = this.dead;
          event.currentTarget.classList.remove('hole_has-goblin');
        } else {
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
      });
    });
  }
}
