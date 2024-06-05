import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import passport from 'passport';

import AppRouter from './routes';
import connectDB from './config/database';

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(cors({ origin: '*' }));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
