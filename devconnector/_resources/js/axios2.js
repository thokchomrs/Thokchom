const axios = require("axios");
const multipleRequests = () => {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos/1"),
      axios.get("https://jsonplaceholder.typicode.com/todos/2"),
    ])
    .then((ResponseArray) => {
      console.log("=> Request ID:", ResponseArray[0].data.id);
      console.log("=> Request ID:", ResponseArray[1].data.id);
    });
};
multipleRequests();
