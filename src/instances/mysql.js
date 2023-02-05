import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.HOST
    }
)

