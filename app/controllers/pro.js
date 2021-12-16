import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const pro = client.db(config.db.name).collection("pro");

export default {
  async create({ username, password, role, trails }) {
    // Check if proHiker is already in the database:
    const existingUser = await pro.findOne({ username });

    // Error if hiker already exists in DB
    if (existingUser) {
      throw new Error("Pro already exists");
    }

    // If new proHiker, await adding 10 "salt" from bcrypt.hash
    const hash = await bcrypt.hash(password, config.encryption.saltRounds);

    // Then add to DB
    return pro.insertOne({ username, password: hash, role, trails });
  },

  // Check to see if username exists in DB
  async show({ username, password }) {
    const existingUser = await pro.findOne({ username });

    // If existingUser does not exist in DB - error
    if (!existingUser) {
      throw new Error("Access Denied");
    }

    const comparison = await bcrypt.compare(password, existingUser.password);

    // If the username is not found, error
    if (!comparison) {
      throw new Error("Access denied"); // Stops
    }

    // If they match, get a signed Json Web Token
    return jwt.sign(
      { username, role: existingUser.role },

      config.encryption.secret,
      {
        expiresIn: config.encryption.expiresIn,
      }
    );
  },
};
