 const squares = document.querySelectorAll('.square');
    const timeleft = document.querySelector('#time-left');
    const score = document.querySelector('#score');
    const startBtn = document.getElementById('start-btn');

    let result = 0;
    let hitPosition;
    let currentTime = 10;
    let timerId = null;
    let countDownTimerId = null;

    function randomSquare() {
      squares.forEach(square => {
        square.classList.remove('mole');
      });
      let randomSquare = squares[Math.floor(Math.random() * 9)];
      randomSquare.classList.add('mole');
      hitPosition = randomSquare.id;
    }

    squares.forEach(square => {
      square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
          result++;
          score.textContent = result;
          hitPosition = null;
        }
      });
    });

    function moveMole() {
      timerId = setInterval(randomSquare, 500);
    }

    function countDown() {
      currentTime--;
      timeleft.textContent = currentTime;

      if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! Your final score is ' + result);
      }
    }

    startBtn.addEventListener('click', () => {
      clearInterval(timerId);
      clearInterval(countDownTimerId);

      
      result = 0;
      currentTime = 10;
      score.textContent = result;
      timeleft.textContent = currentTime;

      
      squares.forEach(square => square.classList.remove('mole'));

      
      moveMole();
      countDownTimerId = setInterval(countDown, 1000);

      
      startBtn.textContent = 'Restart';
    });