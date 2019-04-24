import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { readController } from "../controllers";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});

app.get("/getdata", readController.getData);

app.get("/topten", readController.getTopTen);

app.get("/writedata");

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
