const p1 = new Promise((resolve) => setTimeout(resolve, 5000, "First"));
const p2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second"));
const p3 = new Promise((resolve) => setTimeout(resolve, 3000, "Thidr"));
const p4 = "Fourth";
const p5 = ["Fifth", "Sixth"];
const p6 = { 1: 1, 2: 2 };

const motherPromise = Promise.all([p1, p2, p3, p4, p5, p6]);

motherPromise.then((values) => console.log(values));

const pro1 = new Promise((resolve) => setTimeout(resolve, 5000, "First"));
const pro2 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "I hate JS")
);
const pro3 = new Promise((resolve) => setTimeout(resolve, 3000, "Thidr"));
const pro4 = "Fourth";
const pro5 = ["Fifth", "Sixth"];
const pro6 = { 1: 1, 2: 2 };

const motherPromise2 = Promise.all([pro1, pro2, pro3, pro4, pro5, pro6]);
motherPromise2
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

//  pro2에서 reject가 나왔지만 pro2.catch(error)을 하지 않고 promise.all인
// motherPromise2에서 catch를 해주어도 괜찮다.
