# 바닐라 자바스크립트로 구현해보는 모달

![2021-06-08 14 43 29](https://user-images.githubusercontent.com/48292190/121129487-fdca1c80-c867-11eb-95f5-4952e1d409f4.gif)

## 🛠 구동 방식

기본 modal의 style은 `display : none;`이 되어있습니다.

"바닐라 모달 열기"라는 버튼이 클릭되면 Modal이 `display : block`으로 변환되면서 사용자에게 보여지게 됩니다.

style의 변화를 주는 방법은 class를 주는것인데, JS로 show-modal이라는 프로퍼티 주면, `display : block`이 되는것이고 show-modal을 remove하면 기본값인 `display : none;`으로 돌아오게 되는것입니다.
