import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import { router } from './routers/router';
import * as error from './controllers/errorController';

const app = express();

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'mustache');
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.set('view engine', 'mustache');
app.engine('mustache', mustache());
app.set('views', path.join(__dirname, 'views'));
app.use(router);
app.use(error.error);

const port = process.env.PORT ?? 5000;

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});
