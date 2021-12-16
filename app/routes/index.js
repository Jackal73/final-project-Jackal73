import { Router } from "express";
import proRouter from "./pro.js";

import trailsRouter from "./trails.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hikers!");
});

router.use("/pro", proRouter);

router.use("/trails", trailsRouter);

export default router;
