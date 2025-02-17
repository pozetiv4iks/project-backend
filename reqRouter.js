import { Router } from "express";

const reqRouter = new Router();

reqRouter.post('/create');
reqRouter.delete('/delete');
reqRouter.put('/update');

export default reqRouter;