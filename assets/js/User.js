import Token from "./token";
import appStorage from "./appStorage";
class User {
  responseAfterLogin(data) {
    const access_token = data.access_token;
    const name = data.name;
    const id = data.id;
    const email = data.email;

    if (Token.isValid(access_token)) {
      appStorage.store(
        access_token,
        name,
        id,
        email
      );
    }
  }

  hasToken() {
    const storeToken = localStorage.getItem("token");

    if (storeToken) {
      return Token.isValid(storeToken) ? true : false;
    }
    return false;
  }

  loggedIn() {
    return this.hasToken();
  }

  name() {
    if (this.loggedIn()) {
      return localStorage.getItem("name");
    }
  }
  email() {
    if (this.loggedIn()) {
      return localStorage.getItem("email");
    }
  }

  id() {
    if (this.loggedIn()) {
      const payload = localStorage.getItem("id");
      return payload;
    }
  }
}

export default User = new User();
