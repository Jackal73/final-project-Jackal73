import { Router } from "express";
import trailsController from "../controllers/trails.js";
import Trail from "../models/Trail.js";

const router = new Router();

// Get list of trails - use POST for authentication
router.post("/all", async ({ isAuth }, res) => {
  // if request is properly authorized...
  if (isAuth?.role === "PRO") {
    try {
      const trails = await trailsController.index();
      res.json(trails);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});
    try {
      const { insertedId: id } = await trailsController.create(req.body);
      res.status(201).json({ id });
    } catch ({ message }) {
      res.status(400).json({ message });
    }
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});
export default router;
