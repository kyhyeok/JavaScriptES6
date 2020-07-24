const friends = ["hyeok", "lee", "kim", "chan", "han", "jo"];

// 이 경우에는 함수 안에 들어가는 addHeart가 액션이다

// const addHeard = (current) => console.log(current);
// friends.forEach(addHeard);

// forEach는 current item 말고 index를 두번째 인자로 받고 세번째 인자로는 current array받는다.

// 화살표 함수로 바꾸어서 사용도 가능하다
//friends.forEach((friend) => console.log(friend));

// python의 방법과 비슷한 듯? 아니면 php foreach와 느낌이 비슷하다
for (const friend of friends) {
  if (friend === "jo") {
    break;
  } else {
    console.log(friend);
  }
}
