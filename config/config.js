require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER || 'remote',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'proyecto4_db',
  host: process.env.MYSQL_HOST || '192.168.1.107',
  port: process.env.MYSQL_PORT || 3306,
  dialect: process.env.DIALECT || 'mysql'

}