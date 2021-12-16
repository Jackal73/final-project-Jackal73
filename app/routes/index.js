import { Router } from "express";
import proHikerRouter from "./proHiker.js";
import hikerRouter from "./hiker.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Hikers!");
});

router.use("/proHiker", proHikerRouter);
router.use("/hiker", hikerRouter);

export default router;
