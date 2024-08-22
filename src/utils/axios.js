import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default axios;
