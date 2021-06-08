const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//open이 클릭되면 show-modal을 추가함
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

//close가 클릭되면 show-modal을 삭제함
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

//모달 외부 클릭 시
window.addEventListener("click", (e) => {
  //* e.target === modal인 이유는 modal은 주변 검은색 부분을 의미하기 때문
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
