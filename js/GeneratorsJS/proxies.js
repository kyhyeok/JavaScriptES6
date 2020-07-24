const userObj = {
  username: "hyeok",
  age: 33,
  password: 1234
};

const userFilter = {
  get: (target, prop, receiver) => {
    return target[prop];
  },
  set: () => {
    console.log("set 쟈하하하");
  },
  deleteProperty: (target, prop) => {
    if (prop === "password") {
      return;
    } else {
      target[prop] = "DELETE";
    }
  }
};

const filteredUser = new Proxy(userObj, userFilter);

// Proxy는 두번째 parameter인 userFilter(trap)을 호출하고 userFilter는 Proxy를 다룬다.
// Proxy의 trap은 첫 번째 parameter인 userObj의 이벤트를 가로챈다.
// get에는 (target, prop, receiver)를 가져올 수 있는데
// target은 실제 object이고 prop은 user가 요청한 property data를 로딩한다.
// receiver Proxy가 호출된다.
// return 값을 3항 연산자로도 가능하다(해본적이 없으니 몰랐네)
