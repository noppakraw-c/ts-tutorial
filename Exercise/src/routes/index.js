import express, { Application, Request, Response } from "express";

const app: Application = express();
const req: Request = express();
const res: Response = express();

// router.get("/", controllers.subjectAll);
app.get("/", (req, res) => {
  res.send("Hello world! Game!");
});

module.exports = router;
