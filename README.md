# JavaScript ES6 - 자바 스크립트 이론 심화과정

## VARIABLES

1. Let and Const

- let
  - let은 변수 느낌 새로운 값을 덮을 수 있다.
- const
  - const는 상수 느낌 한 번 값을 지정하면 변경이 불가능하다.

2. Dead Zone(호이스팅 hoisting)

- ES6 전에는 temporal dead zone이 없었다. 이 개념은 let과 함께 생겼다.
- JS는 위에서 아래로 코드를 실행한다. 그러므로 존재 하지 않는 값을 출력할 수 없다.
- 호이스팅은 JS가 프로그램을 실행시키기 전에 어디론가 이동시킨다.
- 기본적으로 위에서 아래로 코드를 실행하지만 무조건 그런것은 아니다.
- 호이스팅은 프로그램이 시작히면 그게 무엇이든 맨 위로 올린다.
- var는 호이스팅때문에 에러가 나야하는 상황에서 에러를 내지 않는다.
- 이런 점을 보안한 것이 let이다. let은 호이스팅하지 않는다.
- 같은 상황에서 var는 언디파인이 나오고 let은 에러를 출력한다.
- let는 var보다 엄격해졌지만 그 점이 더 정확한 프로그램을 만들게 해준다.
- 어지간하면 let 쓰자.

3. Block Scope

- scope는 버블이며 버블은 variable들이 접근 가능한지 아닌지를 감지해준다.
- Block Scope는 {} <- 안에 변수 혹은 상수를 지정하면 {} 밖에서는 사용할 수 없는 것을 뜻한다.
- 오직 {}안에서만 사용 가능한다.
- var는 Block Scope가 적용되지 않는다. var는 function Scope가 적용된다.
- 즉 function(){} <- 안에서만 더른 변수에서의 접근은 막아준다.
- Block Scope는 변수뿐 아니라 if, elseif, try, catch, for, while 등등 {}가 사용되는 모든 로직에 적용이 된다.
- {}밖에서 변수를 설정하면 {}안에서의 사용은 가능하고 {}밖에서 설정한 것은 {}안에서 접근이 가능하고
- {}밖에서 변수명만 설정 수 값을 {}안에서 설정할 경수 접근이 가능하다.
- 변수명 혹은 상수명을 잘 설정하면 문제가 없겠지만 사람은 누구나 실수를 하기에 좋은 기능이다.
- 또한 프로젝트는 혼자 하는 것이 아니기 때문에 좋은 기능이다.

## FUNCTIONS

1. Arrow Functions =>

- 화살 함수는 룰이 편리하고 보기 좋지만 let과 const처럼 var를 대신해서 무조건 사용해야 되는 것은 이다.
- 일단 map은 각각의 인작값마다 함수를 호출하는 일을 한다.
- 화살 함수는 함수를 남용하는 기존에 방식에서 변형된 것을 다시 착안하고 만들어진 것이다.
- 점점 더 보기 좋게 만들 것이 화살 함수이다.
- function()에서 () => 변형된 것이 화살 함수이다. 굉장히 있어보인다.
- 화살 함수는 implicit return (내포된 리턴)이라는 것이 있다.
- implicit return은 같은 줄에 코드에는 자동으로 return이 된다는 의미이다.
- ex - names.map(item => item); return이 된다.
- ex - names.map(item => {item}) 이렇게 {}를 넣으면 implicit return가 적용이 안 된다.
- 인자값이 하나면 ()도 필교가 없다
- ex - names.map(item => item)의 경우 인자값이 item하나
- ex - names.map((item, index) => item)의 경우 인자값이 두개라서 ()가 필요
- 아무것도 없으면 ()만 사용 가능
- ex - names.map(()) => item) 이런 식으로 ()만으로 사용 가능하다.
- 간단하게 함수가 정리될 때 사용하기 적합니다.
- 함수도 변수안에 넣어서 사용 가능하다.

2. 'this' in Arrow Functions

- 핵심은 this는 () => {})에서는 안 먹힌다. this를 사용하고 싶으면 function(){}으로 해야한다.
- addEventListener를 붙이고 그 안에 function이 있다면 JS는 그 이벤트를 this라는 키워드에 넣는다.
- 화살 함수 안에서 this는 window(JS안에서의 window)를 가지고 있다.
- object 안에서도 마찬가지이다.

3. Arrow Functions in the Real World

- js/functions/arrayOperation.js에 있음

4. Default Values

- ES6에는 기본 값을 설정할 수 있고 일반 함수, 화살 함수 상관없이 사용 가능하다.
- js/functions/defaultValues.js에 있음

## Strings

1. Sexy Strings

- ``를 사용하는 방법인데 한국에선 ie를 사용하기 때문에 아직 사용하는거는 이르다.(2020-06)
- `안녕하세요 ${name}입니다.` 식으로 작성한다.
- "안녕하세요" + name + "입니다."와 같다.
- 함수를 넣을 수도 있다. const add = (a, b) => a + b; `안녕하세요 ${add(2,3)} 입니다.`
- 를 하면 안녕세요 5입니다 로 출력이 된다.

2. HTML Fragments

- JS에서 html를 생성하려면 document.createElement, innerText, className 등등
- const = div = document.createElement("div"); div.innerText = "div"; div.className = "div";
- 하나하나 입력을 해주어야 하지만 ES6는 ``을 이용하여 보다 간단하게 구현이 가능하다
- const div = `
  <div class="div">div</div>
`; 물론 중간에 변수입력도 가능 ${변수}
- 이런 식으로 가능하다.
- 또한 `는 Space도 고려해준다. Enter를 누르면 줄바뀜이 되는데`는 줄바뀜도 지원해주기 때문에
- 코드에 문제가 생기지 않는다.
- '<div class="Hello"></div>'식으로 해도 되지면 한 줄로 엄청 길어져서 아름답지 못한 코드가 된다.

- JS에서 .join은 split와 반대??되는 느낌으로 split은 string을 특정한 문제를 기준으로 나누었다면
- join은 array안에서 string 합칠 수 있다.
- array = [1,2,3,4,5]; 를 array.join("|")하면 [1|2|3|4|5]뭐 이런식이 된다. (직접 해보자);
- 배열은 보통 나눠서 사용하기 때문에

3. Cloning Styled Components

- styled components는 리액트 라이브러리이다.
- 자세한 내용은 js/strings/styledComponents.js에 있다.

4. More String Improvements

- includes, repeat, startsWith, endsWith 등등 많이 있다.

## Array

1. Array.of

- 어떠한 것을 배열로 만들고 싶을 때 사용한다.
- new Array();, [], Array.of가 무엇이 다른지 아직 모르겠다.

2. Array.from

- 조금 복잡한데 흠... document.querySelectorAll("뭐시기")는 배열이 아니다.
- 이 배열이 아닌 것으로 forEach같은 작업을 하려고 하면 함수를 가지고 있지 않다고 메시지가 나온다.
- array가 아니기 때문인데 이 때 Array.from이 나온다.
- 위에 document.getElementsByClassName("뭐시기")나 document.querySelectorAll("뭐시기")는
- array가 아닌 array-like object이다. (뭐야 이게??) HTMLCollection 뭐시기 같은것들인 듯
- 그래서 Array.from은 array-like object를 array로 변환해주는 기능이다.

3. Array.find

- Array.find도 String에서의 find와 마찬가지로 테스트 조건이 있고
- 이 조건에 부합한 제일 첫 번째 element를 가져온다.

4. Array.findIndex

- Array.find가 값을 가져오는 거라면 Array.findIndex는 index 번호를 가지고 온다.
- 어디에 있는지 알아야 할때 유용하다

5. Array.fill

- Array.fill는 배열 안 값에 변경해 줄 때 사용 한다.
- Array.fill(값, 시작할 배열 번호, 마지막 배열 번호); 값만 넣으면 전체가 바뀐다.

6. Array.includes

- String에서 includes를 사용할 때와 같이 사용하면 된다.

## DESTRUCTURING

1. Object Destructuring(비구조화)

- 기본적으로 destructuring은 object나 array, 그 외 요소들 안의 변수를
- 바깥으로 끄집어 내서 사용할 수 있도록 해준다.
- 자세한 내용은 js/destructuring/object.js에 있다.

2. Array Destructuring

- const array = [0,1,2];
- const a = array[0]; const b = array[1]; const c = array[2]
- 이것을 const [0, 1, 2] = array;이런식으로
- 추가 가능 [0,1,2,3=3] 3은 원래 없지만 3을 추가 가능

3. Renaming

- 코드참조 js/destructuring/rename.js에 있다.
