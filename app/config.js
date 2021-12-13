import dotenv from "dotenv";

dotenv.config();

export default {
  baseUrl: process.env.BASE_URL || "http://localhost",
  db: {
    name: "trailHikesDB",
    uri: process.env.MONGODB_URI,
  },
  port: process.env.PORT || 3000,
};
