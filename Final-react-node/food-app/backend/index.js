
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import  logger from './utils/logger';
import genericErrorHandler from './middlewares/genericErrorHandler.js';

const loggingMiddleware = (req,res,next) =>{
    const url = req.url;
    const method = req.method;
    
    logger.info(`${method} ${url}`);
    next();
}

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(loggingMiddleware);
app.use(routes);
app.use(genericErrorHandler);

dotenv.config();

app.listen(1234, () => {
    console.log(`listening in port ${process.env.DB_HOST} ${process.env.APP_PORT}`)
});

process.on('uncaughtException', err => {
    logger.error('Uncaught exception', err);
  
    process.exit(1);
  });