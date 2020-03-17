import e, * as express from 'express';
import { getRepository } from 'typeorm';
import Task from '../models/task.entity';


class TaskService {
    
    private taskRepository;
    constructor(){
        this.taskRepository = getRepository(Task);
    }
  
    //Create task
    public create = async ( body ) => {
        const newTask = this.taskRepository.create(body);
        console.log(newTask);
        await this.taskRepository.save(newTask);
        return(newTask);
    }

    //Get all tasks
    public getAll = async () => {
        const tasks = await this.taskRepository.query('SELECT * from TASK');
        return (tasks);
    }   

    public edit = async ( id, body ) => {
        const taskData: Task = body;
        await this.taskRepository.update(id, taskData);
        const updatedTask = await this.taskRepository.findOne( id );
        if (updatedTask) {
          return(updatedTask);
        } else {
            return("Not Found " + id);
        }
    }

    public delete = async ( id ) => {
        const deleteResponse = await this.taskRepository.delete(id);
        if (deleteResponse.affected !== 0) {
          return ( deleteResponse);
        } else {
          return("Not Found " + id);
        }
      }
}

export default TaskService;