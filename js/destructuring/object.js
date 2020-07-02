// 의미없는 데이터
const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false
  },
  color: {
    theme: "dark"
  }
};

// 유저의 notifications에 alerts가 true로 되어있을 때 (이러한 것들은 확인해야 할 때)

// 구 버전
if (settings.notifications.follow) {
  // 뭔가를 한다.
}

/*
    1. 꼴보기 싫다. 코드가 아름답지 못 하다. 코드도 외모지상주의
    2. follow의 값이 없거나 notifications이 통채로 없다면 문제가 생긴다.
    undefined라고 나올 거다
*/

// destructuring 버전
const {
  // object settings의 notifications으로 접근 후 그 안에 있는 follow로 접근
  notifications: { follow },
  color // 컬러만 접근
} = settings;

/*
    =은 object 인 settings로 하고
    우리가 원하는 값인 follow가 나올때 까지 object인 settings를 구석구석 찾아본다.
    찾을때는 {}중괄호로 감싸주고 찾는다.

    const { 이 안에서 변수를 설정하고 값도 가져온다고 본다. }

    notifications: { follow }, 이거는 follow값을 변수로 설정함
    notifications, -> 이거는 notifications값을 변수로 설정함
    위에 것은 notifications의 값을 변수로 설정한게 아님

    여기에 장점은 기본값을 설정할 수 있다
*/

// follow의 값이 없다면
const {
  // follow가 없으면 false가 기본값 false 대산 '무작위'를 넣어도 된다. 즉 아무거나 가능
  notifications: { follow = false },
  color
} = settings;

// notifications 전체가 없다면
const {
  // notifications를 빈 object로 설정한다.
  notifications: { follow = false } = {},
  color
} = settings;
