import express, {Express, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import main from './routes/main.route';

const app: Express = express();
const port: number = 3000;
const user: string = 'TO_BE_DEFINED';
const password: string = 'TO_BE_DEFINED';
const cluster: string = 'TO_BE_DEFINED';
const options: string = '/?retryWrites=true&w=majority';
const uri: string = 'mongodb+srv://' + user + ':' + password + '@' + cluster + options;

mongoose.connect(uri)
  .then(() => console.log('Connection to MongoDB succeeded'))
  .catch(() => console.log('Connection to MongoDB failed'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use('/', main);

app.listen(port, () => {
  console.log('Server Node/Express running on http://localhost:' + port);
});
