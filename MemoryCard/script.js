//getting elements
const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

//카드의 현재 인덱스입니다.
let currentActiveCard = 0;

//화면에 랜더링 될 리스트입니다.
const cardsEl = [];

//카드의 데이터를 다룹니다.
const cardsData = getCardsData();
//1 . []

//모든 카드를 생성합니다.
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  //   <div class="card"></div>

  if (index === 0) {
    card.classList.add("active");
    //첫번째 리스트에 active속성을 추가
  }

  card.innerHTML = `
  <div class="inner-card">
    <div class="inner-card-front">
        <p>
        ${data.question}
        </p>
    </div>
    <div class="inner-card-back">
        <p>
        ${data.answer}
        </p>
    </div>
  </div>`;

  card.addEventListener("click", () => card.classList.toggle("show-answer"));

  //DOM에 append하기
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
}

function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}

//local storage에서 데이터를 가져옴
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  //로컬의 값이 없으면 빈 배열을 리턴함
  return cards === null ? [] : cards;
}

//local storage에 데이터를 저장함
function setCardsData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  window.location.reload();
}

createCards();

nextBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card left";

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = "card active";
  updateCurrentText();
});

prevBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card right";

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = "card active";
  updateCurrentText();
});

showBtn.addEventListener("click", () => {
  addContainer.classList.add("show");
});

hideBtn.addEventListener("click", () => {
  addContainer.classList.remove("show");
});

addCardBtn.addEventListener("click", () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  console.log(question, answer);

  if (question.trim() && answer.trim()) {
    //공백이 없는경우
    const newCard = { question, answer };

    createCard(newCard);

    questionEl.value = "";
    answerEl.value = "";

    addContainer.classList.remove("show");

    cardsData.push(newCard);
    setCardsData(cardsData);
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  cardsContainer.innerHTML = "";
  window.location.reload();
});
