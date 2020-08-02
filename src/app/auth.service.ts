export class AuthService {
  loggedIn = false;

  authenticated() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.loggedIn);
      }, 800);
    });
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
