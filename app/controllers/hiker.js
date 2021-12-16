import client from "../client.js";
import config from "../config.js";

const hikersClient = client.db(config.db.name).collection("hiker");
export default {
  index() {
    return hikersClient.find().toArray();
  },
};
