import * as express from 'express';
import UserController from '../controllers/user';

class UserRoute {
  public path = '/users';
  public router = express.Router();
  public controller: UserController = new UserController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {    
    this.router.get(this.path, this.controller.getAll);
    this.router.post(this.path, this.controller.create);
  }
}

export default UserRoute;