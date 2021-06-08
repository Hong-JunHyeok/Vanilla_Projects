# 바닐라 자바스크립트로 구현해보는 Drag & Drop List

## 🎬

![sortable_list](https://user-images.githubusercontent.com/48292190/121149935-0af20600-c87e-11eb-93b8-9874677a7ece.gif)

## 🛠 구동 방식

list에 `string` 형태로 정보가 저장되어 있습니다. 이때, 이 정보를 HTML에 랜더링하기 위해서는 약간의 가공과정이 필요한데, 그 과정이 `createList`에 있습니다.

`[...list]`이 부분에서 ...은 **전개 구문**으로 쉽개말해 복사한다고 생각하면 됩니다.

- 1번째 map함수에서는 정렬하기 위한 sort속성을 주는 매핑이라고 보시면 됩니다.

- 2번째 sort함수에서는 만든 랜덤값을 기반으로 정렬합니다.

- 3번째 map함수에서는 이제 sort는 필요없기 때문에 value만 남겨두는 매핑입니다.

- 4번째 forEach문에서는 HTML에 append하기위해 하는 작업들입니다.
  이때, `draggable="true"`을 주게되면 드래그가 가능한 속성으로 만들어줍니다.

이제 화면에 랜더링은 완료했으니, 드래그 이벤트를 작성할 차례입니다.

addEventListeners함수를 선언해 각 드래그 이벤트마다 함수를 실행합니다.

본질적으로 값을 바꾸게 해주는 함수는

```js
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
```

이렇게 해서 각각 append해줍니다.
