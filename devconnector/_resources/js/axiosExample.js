const axios = require("axios");

const axiosEx = () => {
  axios
    .put("http://localhost:3000/posts/10", {
      id: 10,
      title: "json-server rajesh",
      author: "typicode TH",
    })
    .then((res) => console.log(res.data));
};

axiosEx();
