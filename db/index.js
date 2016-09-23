const SalesPerson = require('./SalesPerson');
const Region = require('./Region');
const Assignment = require('./Assignment');
const db =  require('./_db');
const Promise = require('bluebird');

SalesPerson.hasMany(Assignment);
Assignment.belongsTo(Region);

module.exports = {
  models: {
    SalesPerson: SalesPerson,
    Region: Region,
    Assignment: Assignment
  },
  syncAndSeed: function(){
    return db.sync({ force: true })
      .then(function(){
        return Promise.all([
            SalesPerson.create({ name: 'moe' }),
            SalesPerson.create({ name: 'larry' }),
            Region.create({ zip: '10025' }),
            Region.create({ zip: '90210' })
        ]);
      })
      .spread(function(moe, larry, region10025, region90210){
        return Promise.all([
            Assignment.create({ salesPersonId: moe.id, regionId: region10025.id})
        ]);
      });
  }
};
