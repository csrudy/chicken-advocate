import {Request, Response, NextFunction} from 'express'

export default {
  getData : (req: Request, res: Response, next: NextFunction) => {
    //
    const { offset , zip, name } = req.params

    if (!offset && !zip && !name) {
      
    }

  }
}