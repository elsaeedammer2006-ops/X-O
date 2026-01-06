let title = document.querySelector(".title");
let turn = "x";
let squares = [];
let gameActive = true; // متغير لتتبع حالة اللعبة

function end(num1, num2, num3) {
  gameActive = false; // إيقاف اللعبة فوراً
  title.innerHTML = `${squares[num1]} Winner`;
  document.getElementById("item" + num1).style.transform = "scale(0.9)";
  document.getElementById("item" + num1).style.background = "#7c490b";
  document.getElementById("item" + num2).style.transform = "scale(0.9)";
  document.getElementById("item" + num2).style.background = "#7c490b";
  document.getElementById("item" + num3).style.transform = "scale(0.9)";
  document.getElementById("item" + num3).style.background = "#7c490b";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[8] != ""
  ) {
    end(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    end(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    end(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    end(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    end(3, 5, 7);
  }

  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    location.reload();
  });
}

function game(id) {
  if (!gameActive) {
    return;
  }

  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = `Turn O`;
    title.style.fontSize = "30px";
    title.style.fontWeight = "700";
    title.style.color = "#0f0f3a";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = `Turn X`;
  }
  winner();
}
