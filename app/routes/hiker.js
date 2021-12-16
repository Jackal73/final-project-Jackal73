import { Router } from "express";
import hikerController from "../controllers/hiker.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hiking World!");
});

router.post("/", async (req, res) => {
  // if request is properly authorized...
  if (req.isAuth) {
    const hikers = await hikerController.index();

    // Get list of hikers
    res.json(hikers);
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});

export default router;
