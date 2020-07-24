// 바로 요것이 blueprint이다.
class User {
  constructor(name) {
    this.userName = name;
  }
  sayHello() {
    console.log(`Hello I'm ${this.userName}`);
  }
}
// bluePrint는 바로 사용이 안되므로 bluePrint를 Class를 생성 해줘야한다.

// hyeokUser는 User의 instance가 되었고 instance는 살아있는 Class를 의미한다.
const hyeokUser = new User("Hyeok");

hyeokUser.sayHello();
