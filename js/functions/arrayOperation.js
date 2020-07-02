// 화살 함수를 더 효율적으로 사용하는 방법

const emails = [
  "hyeok@hyeok.com",
  "hyeok2@gmail.com",
  "naver@google.com",
  "kim@gmail.com",
  "yoon@yoon.com"
];

// includes는 string을 찾아준다.
// 맞는 값을 찾으면 true를 return하고 틀리면 false를 return한다.

// split은 나눠줘야 되는 기준이 필요한다.
// 그 스플리트를 기준으로 하나의 array에 string 상황에 맞는 갯수의 element로 만들어 준다.

// find는 제공되는 테스트 조건을 만족하는 첫번째 엘리언트 값을 리턴하는 함수

// 화살 함수
const foundMail = emails.find((item) => item.includes("@gmail.com"));

// 그냥 함수
const foundMail = emails.find(function (item) {
  return item.includes("@gmail.com");
});

// filter는 제공된 함수의 조건을 만족하는 모든 엘리먼트를 새로운 array로 만들어 주는 함수

// element가 true를 반환하면 새로운 array에 저장을 한다

const noGmail = emails.filter((email) => !email.includes("@gmail.com"));
console.log(noGmail);

// forEach 각 array의 엘리먼트 마다 제공된 함수를 실행한다.
// emails의 경우 배열에 값이 5개가 있으니까 제공된 함수를 5번 실행한다고 생각하면 된다.

//const cleaned = []; 구 버전
const cleaned = new Array(); // 신 버전

emails.forEach((email) => {
  cleaned.push(email.split("@")[0]);
});

console.log(cleaned);

// 이렇게  배열을 변수로 지정후 그 변수에다가 값을 넣어준다.
// 쉬운 방법은 map이 있다.

const cleaned = emails.map((email) => email.split("@")[0]);
console.log(cleaned);

const cleaned = emails.map((email, index) => ({
  username: email.split("@")[0],
  index
}));
console.log(cleaned);
// implicit return은 {}을 쓰면 사용하지 못하고 ()을 같이 쓰면 object도 리턴을 해 준다.
