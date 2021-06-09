# ♾ 무한 스크롤링

> 이 프로젝트는 [Json PLaceholder](https://jsonplaceholder.typicode.com/)를 사용하였습니다.

# 🎬

- 무한 스크롤
  ![infinite_scroll](https://user-images.githubusercontent.com/48292190/121282322-3f180600-c914-11eb-9304-58fd5d07d97f.gif)

- 포스트 검색(필터링)
  ![post_filtering](https://user-images.githubusercontent.com/48292190/121282328-4212f680-c914-11eb-9f64-baf35fca544d.gif)

# 구동 방식

무한 스크롤의 구현은 생각보다 어렵지 않습니다.

다양한 방식이 있겠지만, 서버측에서 page와 limit의 값을 GET할때 파라미터로 받습니다.

이때 프론트 측에서 할 작업은 **사용자가 페이지의 하단부에 닿는 순간, 서버에 요청을 하는 것입니다.**

![network](https://images.velog.io/images/hjh040302/post/3ae49506-30b2-44f3-abb4-dbc8d63ad6eb/image.png)

page를 1씩 증가시켜서 포스트를 증가시키는 거죠.

filter는 input의 value를 **모두 대문자**를 사용합니다. 왜냐하면 대,소문자의 구분없이 검색을 하기 위해서입니다.

그 다음 title, body의 값을 가져와서 모두 대문자로 변환해줍니다.

이제 term을 indexOf로 찾아서 검색이 되면 조건부에 따라 스타일링을 다르게 합니다.

```js
if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
  post.style.display = "flex";
} else {
  post.style.display = "none";
}
```

그러면 검색된 포스트만 레이아웃이 보이게 되고, 검색되지 않은 포스트는 `display : none`스타일링을 적용하게 될 것입니다.
