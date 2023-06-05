const Sequelize=require('sequelize')

const sequelize = new Sequelize('node_complete','root','your_new_password',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports = sequelize;

/*SQL WORKBENCH
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: 'your_new_password'
});

module.exports = pool.promise();
*/