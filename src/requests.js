const key = "a24d3504b371f7e9cd83526964cc137d";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=2`,
  // requestHorror: `https://api.themoviedb.org/3/movie/movie?api_key=${key}&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=1`,
};

// const requests = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer a24d3504b371f7e9cd83526964cc137d",
//   },
// };

export default requests;
