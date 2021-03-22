const game = {
  level: null,
  ques: {
    count: 0,
    body: null,
    choice: null,
  },
  timer: {
    count: 0,
    obj: null,
  },
  score: 0,
};

function startGame(level) {
  game.level = level;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    const quesList = [...this.response];

    document.getElementById('g-level-frame').style.display = 'none';
    document.getElementById('g-ques-frame').style.display = 'flex';

    let timer = setInterval(function () {
      game.timer++;

      if (game.timer === 30) {
        clearInterval(timer);
        stopGame();
      }

      document.querySelector('#g-ques-frame .timer .t-count').innerHTML =
        game.timer;

      writeQues();
    });
  });

  xhr.open('GET', `/ques?level=${level}`);
  xhr.send();
}

function writeQues() {}

document.querySelector(
  '#g-ques-frame .choices-list-cont button'
).onclick = function (e) {
  let choiceNo = e.currentTarget.getAttribute('data-choice-no');
};

function selectAns(ansNo, choice) {
  game.ans[ansNo] = choice;
}

function stopGame() {
  alert('game done!');
}
