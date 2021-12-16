import { Router } from "express";
import proHikerRouter from "./hiker.js";
import hikerRouter from "./proHiker.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hikers!");
});

router.use("/proHiker", proHikerRouter);
router.use("/hiker", hikerRouter);

export default router;
