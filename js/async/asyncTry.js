const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(`XX ${error}`);
  } finally {
    console.log("결과가 어쨋든 이거는 나옵니다.");
  }
};

getMoviesAsync();
