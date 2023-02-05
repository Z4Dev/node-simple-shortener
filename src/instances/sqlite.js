import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: path.join(__dirname,'../database/database.sqlite')
    }
)

