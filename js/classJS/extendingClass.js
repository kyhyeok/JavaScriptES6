// 바로 요것이 blueprint이다.
class User {
  constructor(name, lastName, email, password) {
    this.userName = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello I'm ${this.userName}`);
  }
  getProfile() {
    console.log(`${this.userName} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("can't change password");
    }
  }
}
// bluePrint는 바로 사용이 안되므로 bluePrint를 Class를 생성 해줘야한다.

// hyeokUser는 User의 instance가 되었고 instance는 살아있는 Class를 의미한다.
const hyeokUser = new User("Hyeok", "Kim", "hyeok@com", "1234");

class Admin extends User {
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const hyeokAdmin = new Admin("Hyeok", "Kim", "hyeok@com", "1234");
hyeokAdmin.deleteWebsite();

console.log(hyeokAdmin.email);
