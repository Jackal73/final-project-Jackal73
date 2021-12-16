import User from "./User.js";

export default class ProHiker extends User {
  constructor({ username, password } = {}) {
    super({ username, password });
    this.role = "PROHIKER";
  }

  validate() {
    const errors = [];

    if (!this.username) {
      errors.push("Username is required");
    }

    if (!this.password) {
      errors.push("Password is required");
    }

    if (this.password.length < 4) {
      errors.push("Password must be 4 character minimum");
    }

    return errors;
  }
}
