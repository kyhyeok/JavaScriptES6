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
- 일단 map은 각각의 인수값마다 함수를 호출하는 일을 한다.
- 화살 함수는 함수를 남용하는 기존에 방식에서 변형된 것을 다시 착안하고 만들어진 것이다.
- 점점 더 보기 좋게 만들 것이 화살 함수이다.
- function()에서 () => 변형된 것이 화살 함수이다. 굉장히 있어보인다.
- 화살 함수는 implicit return (내포된 리턴)이라는 것이 있다.
- implicit return은 같은 줄에 코드에는 자동으로 return이 된다는 의미이다.
- ex - names.map(item => item); return이 된다.
- ex - names.map(item => {item}) 이렇게 {}를 넣으면 implicit return가 적용이 안 된다.
- 인수값이 하나면 ()도 필교가 없다
- ex - names.map(item => item)의 경우 인수값이 item하나
- ex - names.map((item, index) => item)의 경우 인수값이 두개라서 ()가 필요
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

- js/functionsJS/arrayOperation.js에 있음

4. Default Values

- ES6에는 기본 값을 설정할 수 있고 일반 함수, 화살 함수 상관없이 사용 가능하다.
- js/functionsJS/defaultValues.js에 있음

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

4. Function Destructuring

- 보통 함수에 argument(이것은 인자인가? 인수인가? ㅜㅜ)가 길면(많으면) 대부분 좋지 않다.
- 그래서 이 많은 argument들을 object안에 넣어버릴 수 있다.
- 변수들의 가독성과 각 변수의 기본값을 설정할 수 있다.
- 그 과정에서 Object Destructuring 사용이 가능하다
- function saveSetting({object1, object2}) 이렇게 가능

5. Value Shorthands (변수명 단축)

- object의 값 설정은 보통 {follow: follow, alert:alert} 이렇게 object의 값을 설정한다
- 하지만 이 과정에서 {follow, alert} 이렇게 생략이 가능한데
- 키와 값의 이름이 통일해야한 가능하다.
- {isFollowing: follow} 이런게 다를 경우 Value Shorthands를 적용할 수가 없고
- ie에서는 Value Shorthands를 할 경우 에러가 발생한다.

6. Swapping and Skipping

- variable swapping은 변수를 교차??해서 변경하는 것이다(꼭 1:1이 아닐 수 있다)
- Omitting(생략) 혹은 Skipping방법도 있다.
- 코드참조 js/destructuring/etc.js에 있다.

## REST AND SPREAD

1. Spread

- 기본적으로 spread는 변수를 가져와서 풀어 헤치고 전개하는 것이다.
- spread를 사용하기 위해서는 ...를 입력해야 한다.
- const testValue = [1,2,3,4] 일때 console.log를 해보면
- console.log(testValue)와 console.log(...testValue)는 다르게 나온다
- array 여러개를 합치려고 할때도 유용하다.
- (array1 + array2)를 하면 array안에 두개의 array가 있는데
- ([...array1 + ...array2])를 하면 array안에 한개의 array로 나열이 된다.
- object에도 Spread는 적용된다. Spread는 unpack시킨다
- 코드참조 js/restAndSpread/spread.js에 있다.
- ...은 데이터를 풀어내는 것이다(unpacking)

2. Spread Applications

- 코드참조 js/restAndSpread/spreadApplications.js에 있다.

3. Rest

- rest는 rest parameter(매개변수)를 의미한다.
- parameter는 함수에게 전달하는 이나들을 이야기한다.
- 코드참조 js/restAndSpread/rest.js에 있다.

4. Rest + Spread + Destructure Magic

- 코드참조 js/restAndSpread/totalReview.js에 있다.

## FOR OF LOOP

1. For ... of

- 자바는 for, forEach, for of 이렇게 3개지를 제공한다.
- for는 익숙하고 해봤으니 통과
- forEach는 배열에 있는 각각의 엘리먼트에 대해 특정한 액션을 실행한다.
- 즉 특정한 액션을 선언하고 각각의 엘리먼트들에게 실행할 수 있는 것이다.
- for of와 forEach는 조금 다르다 우선
- for of iterable하다는 것(루프가 가능) 파이썬 수업때 겁나 들은 그것
- for of 는 ()안에 const인지 let인지 선언 가능하고 string, 노드리스트도 가능하다.
- for of의 큰 장점중 하나는 loop를 멈출 수 있다는 것이다. (break; 개념인 듯)

- 코드참조 js/forOfLoop/forOfLoop.js에 있다.

## PROMISES

1. Introduction

- 우선 자바스크립트의 비동기성과 동기성에 대해 생각해보자
- 절차식 프로그래밍 하나씩 위에서부터 하는것! 사람들도 보통 하나씩 할 것이다.
- 멀티 태스킹은 동시에 여러개를 하는 것이 아닌 여러가지 거를 빠르게 바꾸어가면서 하는 것이다.
- 하지만 컴퓨터는 두 가지 혹은 그 이상의 행동을 동시에 할 수 있다.
- Promises를 이해하려면 이러한 것들인 기본적으로 이해해야 한다.
- JavaScript는 이와 같이 동시에 많은 일들을 할 수 있고 실행을 막지 않는다.
- fetch()는 사이트에서 데이터를 가져올때 사용한다.
- 자바스크립트는 fetch를 해서 데이터(뭐가 돼었든)를 가져오는 시간을 기다려주지 않는다.
- fetch("http://google.com")를 하고 나서 다음에 무언가를 실행했을 때
- fetch("http://google.com")가 끝나는 것을 기다려주지 않고 뒤에 있는 코드를 바로 실행한다.
- 이것이 자바스크립티의 비동기성(Async)이다.
- 자바스크립티는 위에서 아래로 실행되는 절차식 프로그래밍이지만(기본적으로는..맞나??)
- 순차적으로 처리되는 게 아니라 한꺼번에 실행이 된다.
- 이것은 Promises에 대한 기초이다. 이 이론을 알아야지 Promises를 이해할 수 있다.

2. Creating Promises

- Promise는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.
- Promise를 만들 때는 힐생할 수 있는 function을 넣어야 한다.
- Promise의 함수에는 resolve와 reject parameter가 들어가는데
- (resolve와 reject는 감자와 고구마가 될 수도 있다. 즉, 변수명??parameter명은 본인 마음대로 설정가능)
- resolve는 값이고 자바스크립트로 돌아가고
- reject는 에러가 있어서 값이 없는 것이다.
- Promise{<pending>}이라고 나오면 Promise를 아직도 pending하는 중이라는 뜻이다.
- 즉 Promise가 끝나기를 기다리는 중이며 끝내기 위해서는 resolve function을 실행하여야 한다.
- Promise의 핵심은 내가 모르는 값과 함께 작업할 수 있게 해주는 것이다.
- 코드참조 js/promises/createPromises.js에 있다.

3. Using Promises

- Promise에는 then과 catch가 있는데 자바스크립트에서 Promise가 끝난 이후 명령을 전달하는 것이다.
- 이것들은 이때 언제 끝나는 지는 중요하지 않고 끝이 났을 때 값을 돌려달는 명령어이다.
- then은 resolve와 한 쌍인 듯 하다. promise에 값(resolve)이 있으면 then을 이용해서 값을 받는다.
- catch는 reject와 한 쌍인 듯 하다. promise에 오류(reject)가 있으면 catch를 통해서 받는다.
- .then().catch()여서 then이후 catch가 실행된다고 생각하기 쉬우나 그렇지 않다.
- then과 catch는 다르며 하나가 실행되면 하나가 실행된다.
- 코드참조 js/promises/usingPromises.js에 있다.

4. Chaining Promises

- promise는 하나가 아닌 여러개를 사용해야 하는 경우도 있다.
- API에서 데이터를 받는다고 가정하서 data를 받고 나서 다른 행동일 취해야 할 경우가 있을수도 있다.
- API에서 다운받은 데이터가 암호화가 되어있다고 가정할 때 한번의 then에서 데이터를 받고 복호화를 하고 파일을 저장한다고 하면 이 과정들을 then이 이어지면서 작업을 나눠서 하는 것이다.
- 기본적으로 promise에서의 then은 서로의 순서가 끝나기만을 기다린다.
- JavaScript를 배우면서 하다보면 then의 과정이 필요한 순간이 오기 마련이고 이 방법은 작업을 조금 더 쉽게 만들어 준다.
- then을 chaining해주는 과정에서는 반드시 return을 해줘야 한다.
- then을 많이 하다 보면 에러가 발생할 수도 있는데 그러때는 에러에 위치를 파악하기 위해서 catch를 활용해주면 좋다
- catch는 function안에 있는 error를 포함해서 발생한 모든 error들을 잡아 준다.
- 코드참조 js/promises/chainingPromises.js에 있다.

5. promise.all

- Promise.all은 모든 Promise를 실행한 후 진행되는 하나의 Promise를 반환한다.
- 어떤 것은 new Promise일 수도 있고 어떤 것은 아닐수도 있지만 다 같이 반환한다.
- 값, 배열, 오브젝트 다 들어가는 듯하다.
- 작업을 하다 보면 하나의 API가 아닌 여러개의 API에서 값을 불러와야 할 때가 있다.
- Promise.all은 한 개의 Promise를 리턴값으로 주는데 모든 Promise가 전부 Resolve되고 나면 마지막 Promise를 리턴값으로 주는 것이다.
- Promise.all은 new Promise가 아닌 Promise.all();을 해주어야 하고
- Promise.all([1,2,3,4]); 이렇게 배열로 순서를 나열해야 한다.
- Promise.all([4,2,1,3]); 이런식으로 순서는 개발자 본인이 원하는 순서대로 넣어주면 된다.
- Promise.all은 다른 promise들이 전부 진행 될 때까지 기다렸다가 진행되는 것이다.
- Promise.all.then(values)에서 값이 배열로 들어간다. values는 배열이라는 뜻
- Promise.all은 끝나는 시간과 상관없이 내가 나열한 값의 순서에 맞춰서 값을 제공한다.
- Promise.all은 제공한 Promise가 하나라도 reject가 되면 Promise.all도 reject가 된다.
- Promise.all.then().catch()를 해서 uncaught가 되는 것을 출력할 수 있다.
- 코드참조 js/promises/promiseAll.js에 있다.

6. promise.race

- Promise.race와 Promise.all은 사용법이 같다.
- 허나 다른점은 안에 있는 promise(변수, 배열, 오트젝트 등등)이 하나라도 resolve나 reject되면 값을 제공해준다.
- resolve가 되어서 then으로 넘어가거가 reject가 되어서 catch로 넘어가거나 상관없이 가장 빠르게 끝나는 값 하나만 실행이 된다.
- 코드참조 js/promises/promiseRace.js에 있다.

7. finally

- finally try catch finally에서 많이 본 그 finally인 듯 하다.
- 실행이 되든 에러가 나든 finally에서는 결과 값이 나온다.
- Promise가 성공(resolve)했든 실패(reject)했든 무언가를 하고 싶을때 유용하다.
- error가 나면 error를 해결하고 성공하면 성공에 따른 결과 값을 실행시켜 줄 수 있다.
- 코드참조 js/promises/finally.js에 있다.

8. Real world Promises

- fetch는 Promise를 return한다 그래서 Promise를 사용한다는 것은 fetch를 통해 가져온 데이터를 Promise를 통해 사용한다는 말이다. 대부분에 사람들은 Promise를 fetch를 통해 사용하지 개발자 보인이 Promise를 만들어서 사용할 일이 거의 없다.
- fetch는 데이터를 가져오려는 사이트에서 허용을 해야 데이터를 가져올 수 있다.
- fetch.then(response에는 Promise를 리턴하는 함수를 가지고 있다)
- 코드참조 js/promises/realPromise.js에 있다.

## ASYNC / AWAIT

1. ASYNC / AWAIT

- async/await는 Promise의 업데이터 버전이라고 할 수 있고 보다 보기 좋은 코드를 만들 수 있으며 밖에서 값을 가져올 수 있는 방법이다
- then then then then catch가 반복되는 Promise와는 다르게 우아하게 코드를 짤 수가 있다.
- await는 항상 async function안에서만 사용할 수 있다.
- await는 기본적으로 Promise가 끝나길 기다린다
- 2020-07-14강의를 들은 시점으로 fetch.then.then에서는 google.com처럼 안되었는데 async await에서는 잘 가져온다.
- await는 Promise가 끝나는 시간을 기다려 주는거지 성공하는 것을 기다려 주지 않는다.
- 코드참조 js/async/asyncAwait.js에 있다.

2. try catch finally

- async/await에도 catch나 finally가 있다. (이거는 php, java, python에서 많이 보이는 기능) Javscript에서 EX6때 새로 추가 되었다.
- try{}catch(e){}finally{}형식이며
- try는 .then catch는 .catch finally는 .finally랑 같은 문법으로 보면 이해하기 쉬울 듯 하다
- try {throw Error("throw Error")} 블록 안은 throw Error에 있다.
- catch block은 await안에 있는 error만 잡는게 아니라 밖에 있는 error도 잡는다
- 코드참조 js/async/asyncTry.js에 있다.

3. Parallel Async Await

- Parallel은 병렬이다
- 두 개의 API를 이용해서 데이터를 가져올 때 promise.all을 한 이후에 destucturing assignment(구조 분해 할당)을 한다.
- API를 2개 (fetch("")) fetcg를 두개 한다는 뜻
- 이 방식은 함수 안에 집어 넣어야 한다는 점이 어려운 점이다.
- fetch도 좋지만 그 보다 더 좋은 라이브러리들도 있다. ex) Axios
- 코드참조 js/async/asyncParallel.js에 있다.

## CLASSE

1. Introduction to Classes

- 코딩을 할때 대부분은 개발자가 스스로가 Classes를 만들어서 드물고 다른 누군가가 만들 Classes를 사용한다.
- Classes는 라이브러리나 리액트 같은 것들을 만들 때 사용하고 개발자들은 그 Classes를 export해서 사용하고 그 Classes을 내가 코드를 작성하는데 많은 도움을 준다.
- 개발자가 작성한 엄청나게 많은 코드가 있고 이것을 구조화 하기를 원할 때 Class를 이용한다면 매우 유용하다. Class도 function처럼 재활용이 가능하기 때문이다.
- Class는 기본적으로 blueprint(청사진)이다.
- 청사진(靑寫眞) 또는 블루프린트(영어: blueprint)는 아키텍처 또는 공학 설계를 문서화한 기술 도면을 인화로 복사하거나 복사한 도면을 말한다. 은유적으로 "청사진"이라는 용어는 어떠한 자세한 계획을 일컫는 데에 쓰인다. | 위키백과
- Class는 constructor(생성자)를 안에 가지고 있다.
- constructor는 Class를 construct(구성)한다는 constructor(생성자)이다.
- Class안에는 this라고 불리우는 이상한 것이 있다. 나중에 알아보자
- blueprint로 Class 생성해줘야 한다. 미리 만들어 놓은 blueprint Class로 다른 Class를 생성하는 것이다.
- 새로 생성한 Class는 blueprint의 instance가 되고 instance는 살아있는 Class를 의미한다. Class는 instance를 원하는 만큼 만들 수 있다.
- blueprint는 바로 사용할 수가 없기 때문에 죽은 Class라고 불린다.
- Class에는 함수도 만들 수 있다.
- Class와 object는 다르다. Class는 new Class()를 해서 blueprint를 재활용 하는것이다. 이때 blueprint 구조에 따라서 Class(값을 넣을 수 있다.) obejct는 이러한 기능이 없으모 Class는 기본적으로 object의 공장이다.
- object는 정의를 해줘야 하고 어떤 특징도 있지 않고 변수적은 특징도 가지지 않는다. 물론 object.username = "kim" 이렇게 변경 가능 하겠지만 Class와는 구조적으로 다르다.
- 코드참조 js/classJS/classStart.js에 있다.

2. Extending Classes

- this는 기본적으로 Class 안에서 볼 수 있고 Class 자체를 가리킨다.this는 Class 전체를 가르킨다고 볼 수 있다.
- function에서도 요새는 쓰이고 jQuery에서는 \$(this)이렇게도 쓰이지만 개념이 조금 다른듯하다
- properties는 constructor(){이 안에 설정하는 것을 properties라고 한다고 일단 이해하자}
- properties를 설정하는 것은 자체는 어렵지 않지만 어떻게 설정하는지 이해하는 것은 중요하다
- properties는 반드시 constructor에서 불러올 필요도 없다.
- Class안에는 여러개의 함수를 설정할 수 있다.
- 코드참조 js/classJS/extendingClass.js에 있다.

3. super

- 여러개의 arguments를 가지고 있다면 options object로 하는게 더 좋다. 왜냐하면 어떤 값을 넘겨주는지 볼 수 있기 때문이다.
- Extends 할 때 constructor를 새로 설정하면 기존의 Extends할 constructor를 무시하는 것이기 때문에(overwriting) 에러가 난다. 즉, 기존 constructor가 있고 Extends 후 constructor를 하면 기존 constructor 지워지고 새로운 constructor가 생기게 된다.
- 이 부분을 해결하기 위해서 Class안에서만 유효한 super가 존재한다.
- super는 Base Class(원시 클래스)의 constructor를 호출한다.
- class a extends b가 있으면 b가 원시 클리스인 샘이다.
- 코드참조 js/classJS/superClass.js에 있다.

4. WTF is this

- 자바 스크립트가 가지고 있는 기본 성질이 있다.
- 몇 가지 이유에 의해서 this는 변하며 때에 따라 더 이상 Class를 가르키지 않는다.
- addEventListener를 추가하고 누군가 클릭 혹은 이벤트에 따른 동작을 후 함수를 호출하면 자바스크립트는 this를 이벤트를 실행한 element를 가르킨다.
- 이벤트 리스너를 만들면 그 이벤트의 함수가 이벤트를 호출한 element 안으로 this를 복사한다
- this를 항상 class를 가르키고 싶으면 화살표 함수를 사용하면 된다. (ie는??? ㅜㅜ)
- class는 기본적으로 blueprint를 만들어야 함 혹은 blueprint를 import해야함
- 코드참조 index2.html에 있다.
- 코드참조 js/classJS/superClass2.js에 있다.

## SYMBOL, SET AND MAP

1. Symbols

- Symbol은 새로운 자바스크립트에서 Data Type이며 매우 고유한 Data Type이다.
- 모든 symbol은 다르기 때문에 (hi = Symbol()) === (bey = symbol())은 다르다
- symbol은 고유의 주소 값이 있어서 각 symbol마다 값이 다른듯 하다
- symbol의 사용 방법은 일단 주개이다. Uniqueness와 Privacy이다.
- symbol은 Description을 가진다. 하지만 Description은 Description일 뿐 Value가 아니므로 혼동하지 말자
- 자바스크립트에서 symbol은 privacy를 갖는 것이 처음 아이디어였다. 하지만 그렇게 많이 private하지 않는다.
- 어느 순간 unique하지만 private하지는 않게 변했다.

2. Sets

- 자바스크립트는 object의 property를 이용해서 데이터 관리를 자주 한다. 하지만 단순한 object는 우아하지 않다. 그것을 보안해 주는 것이 set이다
- 보통 object는 const user = {age:12, name:"hyeok"}; 하고 추가할 경우 user.weight = 60; 이런식으로 추가하거나
- 삭제를 할 경우 user.age = null 혹은 user.age = undefined를 한다. 우아하지 않다.
- set은 기본적으로 object와 굉장히 비슷하지만 멋진 규칙들이 있다.
- const set1 = new Set();이 기본 설정이고 set은 모든 데이터 타입을 담을 수 있다.
- set의 값은 고유해서 동일한 두 개의 값을 가지고 있을 수 없다.
- 중복이 되지 않는 object가 필요할 경우 아주 요긴하게 쓰일 수 있다.

3. WeakSet

- WeakSet은 Set과 비슷하지만 다르다. WeakSet object만 담을 수 있다.
- WeakSet을 이해하려면 Garbage Collection이란 개념을 알아야 하는데 3년전???? 자바를 학원에서 배울 때 많이 들었던 단어이다.
- Garbage Collection이란 함수나 변수 등등이 더 이상 필요하지 않을 때에도 그 상태로 오랫동안 머물러 있고 그것들은 호출하지 않았을 경우이다. 아무도 사용하지 않지만 메모리속에 있어서 공간을 차지하고 있는 상태이다. 유용하지 않다.
- 사용하지 않거나, 참조하지 않거나 쓸모가 없어지면 Garbage Collection이 이러한 것들은 컴퓨터 메모리에서 알아서 삭제한다.
- C나 저수준의 언어에서는 개발자가 메모리에 있는 것과 메모리에서 내용을 삭제할 수 있는 것들을 하면서 메모리를 관리해야 한다
- 자바스크립트에서는 이러한 작업을들 할 수가 없다. 그래서 Garbage Collection이 필요하다. Garbage Collection이 메모리를 관리 해준다고 생각하면 편하다.
- WeakSet은 WeakSet에 넣은 objects를 가르키는 것이 없다면 지워버린다.
- const WeakSet = new WeakSet(object:object); 가 있을때 WeakSet.object을 아무도 호출을 안하면 지워버린다는 뜻이다.
- WeakSet 그러니까 Garbage Collection이라고 해야되나? 아무튼 이유가 있어서 존재하겠지만 사용 빈도가 그리 많지는 않다.
- 개발자가 WeakSet object를 사용하지 않으면 Garbage Collection이 지워버리는데 언제 어떻게 왜 지웠는지 알 수가 없다.
- 알 수는 있을 수도 있겠다....WeakSet을 공부 많이 해서

4. Map and WeakMap

- Map은 Set과 비슷하지만 Set은 값만 있고 Map은 key-value형식이라는 점이 다르다.
- const map = new Map(); 방식으로 설정한다.
- map.set("age",18); 을 하면 map안에 age라는 key와 18 이라는 value가 들어가 있는 것이다.
- map.has("age")는 true map.get("age")는 value값인 18을 가져온다.
- map도 WeakMap이 있는데 WeakSet과 마찬가지고 object만 넣어야 하고 Garbage Collection이 메모리를 관리해준다.
- map은 overwriting이 가능하다.

## GENERATORS AND MAPS

1. Generators

- \* \* 옆에 \이 붙는다. 왜 그러지....;;
- python 인공지능 수업을 들을 때 들었던 단어들이 많이 나온다.
- generator는 기본적으로 pause를 할 수 있는 함수이다.
- generator사용하기 위해서는 몇 가지 규칙이 존재한다.
- function\* testFunction(){yield}이 기본 규칙이고
- function 옆에 \*을 넣으면 한 단어를 해제하게 되는데 그것이 yield이다.
- generator의 yield는 function의 return과 같다.
- generator가 웹 개발자나 앱 개발자는 많이 사용하지 않은 거 같은게 사견이다.
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator
- 코드참조 js/GeneratorsJS/generator.js에 있다.

2. Proxies

- Proxy 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용
- handler는 프로퍼티들이 function 인 객체이다. 동작이 수행될 때, handler는 proxy의 행동을 정의한다.
- target은 proxy와 함께 감싸진 target 객체 (native array, function, 다른 proxy을 포함한 객체)
- proxy는 두 개의 input을 취하는데 하나는 target이고 하나는 handler이다.
- target에는 value가 들어가는데 obj일 수도 있고 array일 수도 있는 듯 하다(테스트 해보자)
- proxy에서 property를 trap이라고 부르고 proxy 부분의 handler에서 생성이 된다.
- API에서 object 데이터를 가져온 뒤 그것을 중간에 가로채서 데이터를 다룰 수 있는 기능인 듯 하다.
- python 인공지능 수업을 들을 때 이와 비슷한 구현을 했었던 기억이 난다.
- 이미 만들어진 함수, 라이브러리 뭐 그런것들은 가져와서 재가공해서 사용하는 방식으로 기억한다.
- 코드참조 js/GeneratorsJS/proxy.js에 있다.

3. Should you learn proxies or generators?

- Proxy의 같은 경우는 사용자와 프로그래머의 상황이 아닌 프로그래머와 프로그래머간의 상황일 때 쓰이는 듯
- 라이브러리를 개발할 때 다른 개발자가 자신이 개발한 라이브러리를 마음대로 조작해서 코드를 망치는 것을 원하지 않을 때 쓰이는 듯
- generator도 마찬가지 인 듯
