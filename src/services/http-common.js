import axios from "axios";

export default axios.create({
  baseURL: "https://node-jwt-todo-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json"
  }
});