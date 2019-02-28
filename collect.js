import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as session from 'express-session';
import { Health } from './api';
import { Routes } from './api';
import {errorHandler} from './middleware';
import * as feature from './utils/feature';
import * as LogUtil from './utils/log-util';

import { NextFunction, Request, Response } from 'express-serve-static-core';

const logger = LogUtil.getLogger();

const app = express();
const port = process.env.PORT || 3026;

app.use(bodyParser.json());

app.use(session(
    {
        cookie: {
            path: '/',
        },
        name: 'cookie.token',
        saveUninitialized : false,
        secret: '16388#67ghy0(0=jf!23',

    },
));

app.use('/health', Health);

app.use('/', Routes);
app.use(errorHandler);
app.listen(port, () => console.log('Plante API running on port: ' + port)); // tslint:disable-line:no-console

export default app;
