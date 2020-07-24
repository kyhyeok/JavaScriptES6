function* listPeople() {
  yield "kim";
  yield "lee";
  yield "chae";
  yield "han";
}

// yield은 전부 return된다고 보면 된다.

const listG = listPeople();

const friends = ["kim", "lee", "chae", "han"];

function* friendTeller() {
  for (const friend of friends) {
    yield friend;
  }
}

const friendLooper = friendTeller();
