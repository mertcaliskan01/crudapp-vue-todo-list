import axios from "axios";

export default axios.create({
  baseURL: "http://157.230.24.89:8080/",
  headers: {
    "Content-Type": "application/json"
  }
});