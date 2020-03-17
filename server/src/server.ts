import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UserRoute from './routes/user';
import TaskRoute from './routes/task';

 
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App([new UserRoute, new TaskRoute],
    5000
  );
  app.listen();
})();