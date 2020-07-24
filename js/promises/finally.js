const p1 = new Promise((resolve, reject) => setTimeout(reject, 5000, "reject"))
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log("I'm done"));
