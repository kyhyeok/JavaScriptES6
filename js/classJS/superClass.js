// 바로 요것이 blueprint이다.
class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello I'm ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("can't change password");
    }
  }
}

const hyeokUser = new User({
  username: "Hyeok",
  lastName: "Kim",
  email: "hyeok@com",
  password: "1234"
});

class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }

  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const admin = new Admin({
  username: "Hyeok",
  lastName: "Kim",
  email: "hyeok@com",
  password: "1234",
  superAdmin: true,
  isActive: true
});
