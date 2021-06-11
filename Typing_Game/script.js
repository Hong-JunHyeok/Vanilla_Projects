const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

let randomWord;

let score = 0;

let time = 10; // 기본 시간

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

text.focus();
//input창에 포커스를 합니다.

//카운트다운을 시작합니다.
const timeInterval = setInterval(updateTime, 1000);

//words배열로부터 단어를 가져옵니다.
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//단어를 DOM에 렌더링
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

//점수를 업데이트
function updateScore() {
  score++;
  scoreEl.innerText = score;
}

//시간을 업데이트
function updateTime() {
  time--;
  timeEl.innerHTML = time + "초";

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>타임 오버!</h1>
    <p>당신의 최종 스코어는 ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;

  endgameEl.style.display = "flex";
}

addWordToDom();

//이벤트 리스너들

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();

    e.target.value = "";

    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

//세팅 버튼 토글
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

//select 박스 선택
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
