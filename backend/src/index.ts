import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333, function () {
    console.log(`server running in port 3333`);
});