# 바닐라 JavaScript로 구현해보는 메모리 카드

# 🎬

- 카드 추가

![](https://images.velog.io/images/hjh040302/post/8264ec71-1cbd-4670-8739-3972d0656785/2021-06-10%2022.20.11.gif)

- 슬라이딩 + 삭제

![](https://images.velog.io/images/hjh040302/post/dfbd1129-32d4-42d9-bccf-77ea32a58f71/2021-06-10%2022.33.05.gif)

# 구동 방식

- 배열 값 가져오는 방법

처음 렌더링이 되면 localStorage에서 값이 있는지 없는지 확인하는 절차를 가지게 됩니다. 만약 값이 있으면 로컬의 값을 JSON.parse로 변환하고, 없다면 빈 배열 []을 가지게 됩니다.

- 슬라이드 구현 방법

슬라이드 구현 방법은, 왼쪽 버튼(prevBtn)이 클릭되게 되면, right라는 클래스를 부여하고, index를 1 감소시킵니다. 여기서 감소시킨 값이 0보다 작아진다면 index의 값을 0으로 고정시킵니다.
이 작업이 완료된다면 class를 active상태로 변경시킵니다. active클래스는 현재 보여지는 카드를 의미합니다.

> 여기서 클래스를 부여하는 이유는 애니메이션을 주기 위해서입니다.

오른쪽 버튼(nextBtn)도 같은 방식으로 동작합니다.
총 배열의 길이의 -1보다 크다면 index의 크기를 총 배열의 길이 - 1로 고정시킵니다.

- 카드 추가 구현 방법

showBtn이 클릭되면 addContainer에 클래스 show를 추가합니다. 그러면 모달이 뜨도록 하고(opacity : 1), 그 모달에서 추가하기 버튼을 누르면 input창의 value를 가져옵니다. 다음과 같은 방식입니다.

```js
const question = questionEl.value;
const answer = answerEl.value;
```

그러면 이제 공백검사를 위해 trim()을 사용합니다.
trim()은 양 옆 공백을 제거하는 함수인데, 공백에 trim()을 사용하게 되면 빈 문자열 상태이므로 false를 나타나게 됩니다.

> 여기서 " "는 true입니다. ""가 false입니다.

그러면 이제 cardsData에 push를 하고 로컬스토리지에 저장한 다음에 reload()를 해줍니다.

그러면 맨 처음작업과 같이 로컬 스토리지에서 배열의 값을 가져오는 작업을 수행할 것입니다.
