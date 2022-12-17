const axios = require("axios");

axios.interceptors.request.use(
  (config) => {
    config.name = "my-axios-application";
    console.log("sending ${config.method} request to ${config.url}");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.get("https://jsonplaceholder.typicode.com/todos/1");
axios.get("https://jsonplaceholder.typicode.com/todos/1");
axios.get("https://jsonplaceholder.typicode.com/todos/1");
