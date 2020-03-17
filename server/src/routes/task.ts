import * as express from 'express';
import TaskController from '../controllers/task';

class TaskRoute {
  public path = '/tasks';
  public router = express.Router();
  public controller: TaskController = new TaskController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {    
    this.router.get(this.path, this.controller.getAll);
    this.router.post(this.path, this.controller.create);
    this.router.patch(`${this.path}/:id`, this.controller.edit);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  }
}

export default TaskRoute;