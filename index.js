import express from 'express';
import { sequelize } from './src/instances/sqlite.js';
import routes from './src/routes/short.js';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import * as sqlite from 'sqlite3';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const server = express()
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname,'src/views'))
server.engine('mustache',mustacheExpress())
server.use('/short',routes)
server.use('/home', express.static('src/views'))

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync()
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const port = process.env.PORT || 9999
server.listen(port, () => {
    console.log('http://localhost:' + port)
})