import * as express from 'express';
import TaskService from '../services/task';
 
class TaskController {
  public service: TaskService = new TaskService();

  public create = async (request: express.Request, response: express.Response) => {
    let newTask = await this.service.create(request.body);
    response.send(newTask);
  }

  public getAll = async (request: express.Request, response:express.Response) => {
    const tasks = await this.service.getAll();
    response.send(tasks);
  }

  public edit = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const updatedTask = await this.service.edit(request.params.id, request.body);
    response.send(updatedTask);
    
  }
 
  public delete = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const deleteResponse = await this.service.delete(request.params.id);
    response.send(deleteResponse);
  }
}

export default TaskController;
