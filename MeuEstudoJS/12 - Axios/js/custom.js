// 7 - custom instance

const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    accept: "application/json",
    authorization: "meunovotoken",
  },
});
