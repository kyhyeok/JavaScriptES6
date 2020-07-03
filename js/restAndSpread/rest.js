// 보통 이런식으로 맞춰서 넣었지만 이 방식 대신에
// const infiniteArgs = ({first, second, third}) => console.log();
const infiniteArgs = (...rest) => console.log(rest);

//(...뒤에는 아무거나 입력해도 된다 ...hyeok도 되고 ...lee도 된다)
infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4], "ㅁㄴㅇㄻㄴㄹ");

// rest는 모든 값을 하나의 변수로 축소(contract) 시켜준다
// Spread와 방식은 똑같다 ...변수명?? 을 해주면 ...뒤에 something에 값을 전부 넣어준다는 뜻이다.

const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(rest);
};
bestFriendMaker("hyeok", "lee", "kim", "han");
// firstOne에서 hyeok을 사용하고 rest를 가져오니 hyeok을 제외한 값들이 가져왔다
// push.pop을 하면 먼저 사용된 데이터는 array안에 담겨있지 않는것과 비슷하다
