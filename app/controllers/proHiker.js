import client from "../client.js";
import config from "../config.js";

const proHiker = client.db(config.db.name).collection("proHiker");

export default {
  async create(username, password) {
    // Check if proHiker is already in the database:
    // console.log(username, password, "from proHiker controller");
