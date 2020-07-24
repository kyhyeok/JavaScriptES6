const getMoviesPromise = () => {
  fetch("https://yts.am/api/v2/list_movies.json")
    .then((response) => {
      // 여기 response처럼
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(`XX ${e}`));
};

const getMoviesAsync = async () => {
  // promise then의 response와 같다.
  const response = await fetch("https://yts.mx/api/v2/list_movies.json");
  const json = await response.json();
  console.log(json);
};

getMoviesAsync();

//

async function getMoviesAsync2() {}
