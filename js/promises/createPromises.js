/*
const amIsexy = new Promise(function (resolve, reject) {
  setTimeout(function timeOut() {
    resolve("Yes you are!");
  }, 3000);
});

console.log(amIsexy);

setInterval(() => {
    console.log(amIsexy);
  }, 1000);
*/

const amIsexy = new Promise(function (resolve, reject) {
  setTimeout(resolve, 3000, "Yes you are!");
});

console.log(amIsexy);

setInterval(console.log, 1000, amIsexy);
