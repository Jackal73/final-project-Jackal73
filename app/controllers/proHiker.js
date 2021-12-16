import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const proHiker = client.db(config.db.name).collection("proHiker");

export default {
  async create(username, password) {
    // Check if proHiker is already in the database:

    const existingProHiker = await proHiker.findOne({ username });

    // Error if hiker already exists in DB
    if (existingProHiker) {
      throw new Error("proHiker already exists");
    }

    // If new proHiker, await adding 10 "salt" from bcrypt.hash
    const hash = await bcrypt.hash(password, 10);

    // Then add to DB
    return proHiker.insertOne({ username, password: hash });
  },

  // Check to see if username exists in DB
  async show(username, password) {
    const user = await proHiker.findOne({ username });

    // If the username is not found, error
    if (!user) {
      throw Error("proHiker not found"); // Stops
    }

    // If it exists;
    // Compare, (with bcrypt.compare), string password with hashed password
    const match = await bcrypt.compare(password, user.password);

    // If passwords do not match, error
    if (!match) {
      throw Error("Invalid credentials!"); // Stops
    }

    // If they match, get a signed Json Web Token
    return jwt.sign({ username }, config.encryption.secret, {
      expiresIn: config.encryption.expiresIn,
    });
  },
};
