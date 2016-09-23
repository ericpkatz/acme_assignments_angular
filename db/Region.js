const db = require('./_db');
const Region = db.define('region', {
  zip: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Region;
