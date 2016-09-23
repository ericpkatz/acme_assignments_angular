const db = require('./_db');
const SalesPerson = db.define('sales_person', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
});
module.exports = SalesPerson;
