import { Router } from "express";
import proHikerController from "../controllers/proHiker.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hiking World!");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  proHikerController.create(username, password);
  res.send("Post request");
});

export default router;
