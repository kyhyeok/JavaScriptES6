// resolve then
/*
const amISexy = new Promise((resolve, rejuct) => {
  setTimeout(resolve, 3000, "Yes you are");
});

amISexy.then((value) => console.log(value));
*/

// catch reject
const amISexy = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "you are ugly");
});

amISexy
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
