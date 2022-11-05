import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

class UserService {
  getAll() {
    return axios.get(API_URL + 'tasks');
  }

  get(id) {
    return axios.get(API_URL + `tasks/${id}`);
  }

  create(data) {
    return axios.post(API_URL + 'register', data);
  }

  update(id, data) {
    return axios.post(API_URL + `tasks/${id}`, data);
  }

  delete(id) {
    return axios.delete(API_URL + `tasks/${id}`);
  }

  deleteAll() {
    return axios.delete(API_URL + `tasks/`);
  }

  findByTitle(title) {
    return axios.get(API_URL + `tasks?title=${title}`);
  }


}

export default new UserService();
