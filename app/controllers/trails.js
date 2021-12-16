import client from "../client.js";
import config from "../config.js";
import { ObjectId as objectId } from "mongodb";

const pro = client.db(config.db.name).collection("pro");
const trails = client.db(config.db.name).collection("trails");
// get trails
export default {
  index() {
    return trails.find().toArray();
  },

  // Add a new trail
  async create(newTrails) {
    const { insertedId } = await trails.insertOne(newTrails);
    await pro.updateMany({}, { $push: { trails: newTrails } });

    return { insertedId };
  },

export default {
  create(newTrails) {
    return trailsClient.insertOne(newTrails);
  },
};
