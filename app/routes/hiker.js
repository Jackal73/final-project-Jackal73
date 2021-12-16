import { Router } from "express";
import hikerController from "../controllers/hiker.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hiking World!");
});

router.post("/", async ({ isAuth }, res) => {
  // if request is properly authorized...
  if (isAuth?.role === "PROHIKER") {
    try {
      const hikers = await hikerController.index();

      // Get list of hikers
      res.json(hikers);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});

export default router;
