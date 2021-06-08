const draggable_list = document.getElementById("draggable-list");

const list = [
  "맥북",
  "아이폰",
  "안경",
  "우아한 형제들",
  "조거 팬츠",
  "아이패드",
  "넷플릭스",
  "TV",
  "플레이 스테이션",
  "리그 오브 레전드",
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  //* 이 함수는 DOM에 리스트를 렌더링합니다.
  [...list]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value)
    .forEach((item, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="item-name">${item}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
