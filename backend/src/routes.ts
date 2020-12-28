import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req,res) => {
    return res.send('Hello 2');
});

routes.get('/userMail', UserController.userMail);
routes.post('/sendMail', UserController.sendMail);

export default routes;