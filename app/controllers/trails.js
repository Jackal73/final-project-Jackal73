import client from "../client.js";
import config from "../config.js";

const trailsClient = client.db(config.db.name).collection("trails");

export default {
  create(newTrails) {
    return trailsClient.insertOne(newTrails);
  },
};
