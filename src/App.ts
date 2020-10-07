import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as recipeRouter from './router/recipeRouter';
import * as cors from 'cors';

const cron = require('node-cron');

// Create config EXpress
class App {
    // Express instance
    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(cors());
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    //API config with EndPoint
    private routes(): void {
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello Welcome to recipe service manager!'
            });
        });
        this.express.use('/', router);
        this.express.use('/api/v1/recipe', recipeRouter.default);
    }

}
export default new App().express;