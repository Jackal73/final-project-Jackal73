import express from "express";
import config from "./config.js";
import router from "./routes/index.js";

const app = express();

// Test route
app.get("/", (_, res) => {
  res.send("Hello World!");
});

// Middleware - allows express to read json requests
app.use(express.json());

// Middleware - starts the router
app.use("/api", router);

// Listen for port
app.listen(config.port, () => {
  console.log(`Server running: ${config.baseUrl}:${config.port}`);
});
