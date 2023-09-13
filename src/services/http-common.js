import axios from "axios";

export default axios.create({
  baseURL: "http://164.92.180.114/:8080/",
  headers: {
    "Content-Type": "application/json"
  }
});