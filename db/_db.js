var Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);
db.Sequelize = Sequelize;
module.exports = db;
