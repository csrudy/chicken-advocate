import * as express from "express"
import { Request, Response, NextFunction} from "express"


const app = express()
const PORT = 3000;



app.get("/",(req: Request, res: Response, next: NextFunction) => {
  //
})


app.get("/getdata")

app.get("writedata")


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})