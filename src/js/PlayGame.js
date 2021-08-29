export default class PlayGame {
  constructor() {
    this.dead = 0;
    this.lost = 0;
    this.clickOrNo = true;
  }

  eventClick() {
    const hole = document.querySelectorAll('.hole');
    const arrHole = Array.from(hole);

    setInterval(() => {
      if (!this.clickOrNo) {
        this.scoring(false);
        this.clickOrNo = false;
      } else {
        this.clickOrNo = false;
      }
    }, 1000);

    arrHole.forEach((element) => {
      element.addEventListener('click', (event) => {
        this.clickOrNo = true;
        if (event.currentTarget.classList.contains('hole_has-goblin')) {
          this.scoring(true);
          event.currentTarget.classList.remove('hole_has-goblin');
        } else {
          this.scoring(false);
        }
      });
    });
  }

  scoring(score) {
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    if (score) {
      this.dead += 1;
      dead.textContent = this.dead;
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
  }
}
