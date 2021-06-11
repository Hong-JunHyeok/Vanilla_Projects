# 타이핑 게임

# 🎬

![](https://images.velog.io/images/hjh040302/post/5e0ea257-d974-42fd-bbd5-534739873e9e/2021-06-11%2017.15.02.gif)

- 난이도 선택

![](https://images.velog.io/images/hjh040302/post/66d3f13e-81e0-498f-b11e-f1533145b0cb/2021-06-11%2017.16.33.gif)

# 구동 방식

먼저 단어들이 나열되어 있는 배열을 만들어준다.
이 배열이 나중에 타이핑 게임할때 랜덤으로 나올 것이다.

이제 랜덤으로 단어를 나오게하는 함수를 구현해보도록 하자. 이 함수는 Math.random 을 사용해서 구현할것이다.

```js
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
```

이러면 이제 랜덤으로 단어들을 나오게 할 준비가 되었다.
랜덤 단어를 가지고 와서, innterHTML로 화면에 랜더링해준다.

이제 시간을 카운팅해야하는데, 시간은 일정 주기마다 실행되는 함수인 setInterval을 사용해서 구현을 할것이다.

1000밀리초, 즉 1초마다 time이라는 변수를 1씩 감소시키며, time이 0이 되는 순간 setInterval을 clearInterval() 시켜준다. 그러면 일정 시간마다 실해되는 인터벌이 해제된다.

그 다음, gameOver()이라는 함수를 실행해, 게임오버 모달을 뜨게한다.

타이핑을 하면서, 단어와 타이핑이 일치하면 다음 단어를 불러와야하는데, 이 과정도 어렵지 않다.

text 인풋창에 addEventListener를 'input'이벤트로 걸어준 다음에, 단어와 같은 경우, time을 난이도에 따라 증가시키고 화면에 다음 단어를 랜더링시킨다.
