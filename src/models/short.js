import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/sqlite.js';

export const Link = sequelize.define("Link", {
    id: {
        primaryKey:true,
        autoIncrement:true,
        type: DataTypes.INTEGER 
    },
    code: {
        type: DataTypes.STRING
    },
    redirect: {
        type: DataTypes.STRING
    }
}, {
    tableName:'shorts',
    timestamps:false
    }
)
