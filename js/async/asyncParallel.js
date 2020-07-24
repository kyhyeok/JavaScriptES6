const getMoviesAsync = async () => {
  try {
    const [moviesResponse, suggestionResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"),
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")
    ]);
    const [movies, suggestions] = await Promise.all([
      moviesResponse.json(),
      suggestionResponse.json()
    ]);

    console.log(movies, suggestions);
  } catch (error) {
    console.log(`XX ${error}`);
  } finally {
    console.log("결과가 어쨋든 이거는 나옵니다.");
  }
};

getMoviesAsync();
