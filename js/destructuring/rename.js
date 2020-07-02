// api에서 데이터를 가져 왔다고 가정하자
const settings = {
  color: {
    chosen_color: "dark"
  }
};

// 이때 chosen_color 이런 이름짓는 재치가 하나도 없는 듯한 변수명이 싫어서 변수명을 바꾸고 싶다면

// 굉장히 촌스러운 기존 방법
// const chosenColor = settings.color.chosen_color || "light";

// 우아하고 세련된 방법 let일때도 된다
/*
const {
  color: { chosen_color: chosenColor = "light" }
} = settings;
*/

// 이런 우아한 방법도 있다 const는 상수라서 const로 하면 안된다.
let chosenColor = "blue";

console.log(chosenColor);

({
  color: { chosen_color: chosenColor = "light" }
} = settings);

console.log(chosenColor);
