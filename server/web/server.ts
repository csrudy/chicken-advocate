import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { readController, cacheController } from "../controllers";
import client from "../db/redisConnect";

const app = express();
const PORT = 3000;

// initialization script
client.flushall();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});

app.get("/getdata", readController.getData);

app.get("/topten", readController.getTopTen);
app.get(
  "/initialize",
  cacheController.checkCache,
  readController.getInitialData,
  cacheController.writeCache
);

app.get("/writedata");

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
