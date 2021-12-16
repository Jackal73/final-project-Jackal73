import { Router } from "express";
import proHikerController from "../controllers/proHiker.js";
import ProHiker from "../models/users/ProHiker.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hiking World!");
});

// ProHiker route
router.post("/register", async (req, res) => {
  try {
    const proHiker = new ProHiker(req.body);

    const errors = proHiker.validate();

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    await proHikerController.create(proHiker);

    // Log in the User and wait for the JWT
    const token = await proHikerController.show(proHiker);

    res.status(201).send(token);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

export default router;
