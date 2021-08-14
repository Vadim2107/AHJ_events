export default class PlayGame {
  constructor() {
    this.dead = 0;
    this.lost = 0;
    this.clickOrNo = true;
    this.hole = document.getElementsByClassName('hole');
  }

  eventClick() {
    setInterval(() => {
      if (this.clickOrNo === false) {
        this.scoring(false);
        this.clickOrNo = false;
      } else {
        this.clickOrNo = false;
      }
    }, 1000);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 16; i++) {
      const arrHole = Array.from(this.hole);
      arrHole[i].addEventListener('click', (event) => {
        event.preventDefault();
        this.clickOrNo = true;
        if (event.currentTarget.classList.contains('hole_has-goblin')) {
          this.scoring(true);
        } else {
          this.scoring(false);
        }
      });
    }
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
}
