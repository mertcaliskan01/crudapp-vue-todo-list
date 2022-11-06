import http from "./http-common";

class AuthService {
  login(user) {
    return http
      .post('login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return http.post( 'register', {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();