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

      listItems.push = listItem;

      draggable_list.appendChild(listItem);
    });
}
