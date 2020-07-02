// 두 가지 해봄 일단 함수가 있어야함
// 이때 함수는 만들고 싶은 element를 받고 적용하고 싶은 css를 적용한 element를 리턴알거임

//const styled = (css) => console.log(css);

// 이 방식은 앞에서 많이 언급했지만 Enter 즉 줄바뀜을 할 때 문제가 된다.
/*
styled("border-radius:10px;
color:blue;
"");
*/

// 이 방식도 가능하지만 아름답지 않음
/*
styled(`border-radius:10px;
color: blue;
`);
*/

// 그래서 이 방법으로 하면
/*
styled`border-radius:10px;
color: blue;
`;
*/
// 조금더 아름다워 지고 argument가 다르게 나온다.
// 이 방식이 리엑트에서 styled components에사 사용하는 방식이다.
// ``방식은 argument가 text string(text)로 들어간다.
/*
const styled = (aElement) => {
  const el = document.createElement(aElement);
  return el;
};

(...) is not a function ap (...).js는 function이 아니라는 오류
두번 호출 했을 수도 있고 등등의 이유는 많다.

참고로 함수 안에서 함수 호출이 가능하다.

*/

// 여기에 div를 넣으면 div가 생성 span을 입력하면 span이 생성 원하는 것을 생성할 수 있다.
//const title = styled("h1");

const styled = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

// 여기에 div를 넣으면 div가 생성 span을 입력하면 span이 생성 원하는 것을 생성할 수 있다.
const title = styled("h1")`
  background-color: red;
  color: blue;
`;
// 요것이 react에서 사용하는 방식이다.
const subtitle = styled("span")`
  color: green;
`;

title.innerText = "안녕하세요";
subtitle.innerText = "김목사입니다.";

document.body.append(title, subtitle);
