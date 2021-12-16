import User from "./User.js";

export default class ProHiker extends User {
  constructor({ username, password } = {}) {
    super({ username, password });
    this.role = "PROHIKER";
  }
}
