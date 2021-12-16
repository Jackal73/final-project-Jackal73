import { Router } from "express";
import proHikerController from "../controllers/proHiker.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hiking World!");
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    await proHikerController.create(username, password);

    // Log in the proHiker and wait for the JWT
    const token = await proHikerController.show(username, password);

    res.send(token);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

export default router;
