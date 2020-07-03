// Swapping
let mon = "Sat";
let sat = "Mon";

// 방식 1 스와이핑
[sat, mon] = [mon, sat];
// 방식 2 값 overwriting하는 거
[sat, mon] = ["Sat", "Mon"];

// Skipping
const days = ["mon", "tue", "wed", "thu", "fri"];
// 이렇게 데이터가 있더라도 마지막 두개만 가져오고 싶을 경우
const [, , , thu, fri] = days;
console.log(thu, fri);

// 이렇게 중간에 하는 것도 가능
const [, tue, , , fri] = days;
console.log(tue, fri);
