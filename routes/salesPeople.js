const router = require('express').Router();
const models = require('../db').models;
const SalesPerson = models.SalesPerson;
const Assignment = models.Assignment;
module.exports = router;

router.get('/', function(req, res, next){
  SalesPerson.findAll({ include: [ Assignment ]})
    .then(function(salesPeople){
      res.send(salesPeople);
    })
    .catch(next);
});

router.delete('/:id', function(req, res, next){
  SalesPerson.destroy({ where: { id: req.params.id }})
    .then(function(){
      res.sendStatus(200);
    })
    .catch(next);
});

router.delete('/:salesPersonId/assignments/:id', function(req, res, next){
  Assignment.destroy({ where: { id: req.params.id, salesPersonId: req.params.salesPersonId }})
    .then(function(result){
      res.sendStatus(200);
    })
    .catch(next);
});

router.post('/:salesPersonId/assignments', function(req, res, next){
  Assignment.create({ regionId: req.body.regionId, salesPersonId: req.params.salesPersonId })
    .then(function(assignment){
      res.send(assignment);
    })
    .catch(next);
});

router.post('/', function(req, res, next){
  SalesPerson.create({ name: req.body.name })
    .then(function(salesPerson){
      return SalesPerson.findById(salesPerson.id, { include: [ Assignment ]});
    })
    .then(function(salesPerson){
      res.send(salesPerson);
    })
    .catch(next);
});
