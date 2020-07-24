const p1 = new Promise((resolve) => setTimeout(resolve, 5000, "First"));
const p2 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "I hate JS")
);
const p3 = new Promise((resolve) => setTimeout(resolve, 3000, "Thidr"));

const motherPromise = Promise.race([p1, p2, p3]);
motherPromise
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

// resolve나 reject 상관 없이 가장 먼저 끝나는 것이 실행이 된다.

// 이렇게 사용도 가능하다.
Promise.race([p1, p2, p3]);
motherPromise
  .then((values) => console.log(values))
  .catch((error) => console.log(error));
