import Token from "./token";
import appStorage from "./appStorage";
class User {
  responseAfterLogin(response) {
    const access_token = response.data.access_token;
    const id = response.data.id;
    const name = response.data.name;
    const email = response.data.email;
    const is_email_verified = response.data.is_email_verified;

    if (Token.isValid(access_token)) {
      appStorage.store(
        access_token,
        name,
        id,
        is_email_verified,
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
  isEmailVerified() {
    if (this.loggedIn()) {
      return localStorage.getItem("is_email_verified");
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
