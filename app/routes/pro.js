import { Router } from "express";
import proController from "../controllers/pro.js";
import Pro from "../models/Users/Pro.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hiking World!");
});

// ProHiker route
router.post("/register", async (req, res) => {
  try {
    const pro = new Pro(req.body);

    console.log(pro);

    const errors = pro.validate();

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    await proController.create(pro);

    // Log in the User and wait for the JWT
    const token = await proController.show(pro);

    res.status(201).send(token);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const token = await proController.show(req.body);
    res.status(200).send(token);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

export default router;
