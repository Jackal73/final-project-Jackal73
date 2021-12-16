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
// Add a new trail
router.post("/", async ({ isAuth, body }, res) => {
    try {
    if (isAuth?.role === "PRO") {
      const trail = new Trail(body);
      const errors = trail.validate();
      if (errors.length) {
        throw new Error(errors.join("\n"));
      }

      const resp = await trailsController.create(body);

      res.status(201).json(resp);
    } else {
      throw new Error("You are not authorized to perform this action");
    }
    } catch ({ message }) {
      res.status(400).json({ message });
  }
});
// Get a trail by id
router.post("/:id", async ({ isAuth, params }, res) => {
  // if request is properly authorized...
  if (isAuth?.role === "PRO") {
    try {
      const trail = await trailsController.show(params.id);
      res.json(trail);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});
export default router;
