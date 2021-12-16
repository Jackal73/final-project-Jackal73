import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hiking World!");
});

export default router;
