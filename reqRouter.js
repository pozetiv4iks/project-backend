import { Router } from "express";
import reqController from "./reqController.js";
const reqRouter = new Router();

reqRouter.post('/create' , reqController.create);
reqRouter.delete('/delete/:id', reqController.delete);
reqRouter.put('/update/:id', reqController.update);
reqRouter.get('/')

export default reqRouter;