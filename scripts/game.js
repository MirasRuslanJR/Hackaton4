let score = 0;
let missedGifts = 0;
let collectedGifts = 0;
let kevin = document.getElementById("kevin");
let scoreDisplay = document.getElementById("score");
let missedGiftsDisplay = document.getElementById("missedGifts");
let gameContainer = document.querySelector(".game-container");
let kevinSize = 20;

let kevinPosition = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === "a" && kevinPosition > 0) {
    kevinPosition -= 30;
  } else if (
    event.key === "d" &&
    kevinPosition < gameContainer.offsetWidth - kevinSize
  ) {
    kevinPosition += 30;
  }
  kevin.style.left = kevinPosition + "px";
});

function moveGift() {
  let giftPosition = -50;
  let giftLeft = Math.random() * (gameContainer.offsetWidth - 40);
  let giftElement = document.createElement("div");
  giftElement.classList.add("gift");
  giftElement.style.backgroundImage = "url('../img/gift.png')";
  giftElement.style.left = giftLeft + "px";
  giftElement.style.top = giftPosition + "px";

  gameContainer.appendChild(giftElement);

  let giftInterval = setInterval(function () {
    giftPosition += 5;
    giftElement.style.top = giftPosition + "px";
    if (giftPosition >= gameContainer.offsetHeight) {
      missedGifts++;
      checkGameOver();
      clearInterval(giftInterval);
      gameContainer.removeChild(giftElement);
    }

    checkCollision(giftElement, giftPosition, giftLeft, giftInterval);
  }, 20);
}

function checkCollision(giftElement, giftPosition, giftLeft, giftInterval) {
  let kevinRect = kevin.getBoundingClientRect();
  let giftRect = giftElement.getBoundingClientRect();

  if (
    kevinRect.left < giftRect.right &&
    kevinRect.right > giftRect.left &&
    kevinRect.top < giftRect.bottom &&
    kevinRect.bottom > giftRect.top
  ) {
    collectedGifts += 1;
    score += 1;
    scoreDisplay.innerText = `Очки: ${score}`;
    gameContainer.removeChild(giftElement);
    clearInterval(giftInterval);

    checkGameWin();
    if (score % 10 === 0) {
      kevinSize += 25;
      kevin.style.width = kevinSize + "px";
      kevin.style.height = kevinSize + "px";
    }
  }
}

function moveGift() {
  let giftPosition = -50;
  let giftLeft = Math.random() * (gameContainer.offsetWidth - 40);
  let giftElement = document.createElement("div");
  giftElement.classList.add("gift");
  giftElement.style.backgroundImage = "url('../img/gift.png')";
  giftElement.style.left = giftLeft + "px";
  giftElement.style.top = giftPosition + "px";

  gameContainer.appendChild(giftElement);

  let isCaught = false;
  let giftInterval = setInterval(function () {
    giftPosition += 5;
    giftElement.style.top = giftPosition + "px";

    if (!isCaught) {
      checkCollision(giftElement, giftPosition, giftLeft, giftInterval);
    }

    if (giftPosition >= gameContainer.offsetHeight) {
      missedGifts++;
      checkGameOver();
      clearInterval(giftInterval);
      missedGiftsDisplay.innerText = `Пропущенно: ${missedGifts}`;
      gameContainer.removeChild(giftElement);
    }
  }, 20);
}

function checkGameOver() {
  if (missedGifts >= 5) {
    alert("Игра окончена! Вы пропустили 5 подарков.");
    alert("Чтобы начать заново, перезагрузите страницу.");
    location.reload();
  }
}

function checkGameWin() {
  if (collectedGifts >= 50) {
    alert("Поздравляем! Вы собрали 50 подарков и выиграли!");
    alert("Чтобы начать заново, перезагрузите страницу.");
    location.reload();
  }
}

setInterval(moveGift, 2000);

let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

// Управление кнопками
leftBtn.addEventListener("click", function () {
  if (kevinPosition > 0) {
    kevinPosition -= 30;
    kevin.style.left = kevinPosition + "px";
  }
});

rightBtn.addEventListener("click", function () {
  if (kevinPosition < gameContainer.offsetWidth - kevinSize) {
    kevinPosition += 30;
    kevin.style.left = kevinPosition + "px";
  }
});

// Управление касаниями
gameContainer.addEventListener("touchstart", function (event) {
  let touchX = event.touches[0].clientX;
  let containerRect = gameContainer.getBoundingClientRect();

  if (touchX < containerRect.left + containerRect.width / 2) {
    if (kevinPosition > 0) {
      kevinPosition -= 30;
      kevin.style.left = kevinPosition + "px";
    }
  } else {
    if (kevinPosition < gameContainer.offsetWidth - kevinSize) {
      kevinPosition += 30;
      kevin.style.left = kevinPosition + "px";
    }
  }
});
