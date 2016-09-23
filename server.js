const server = require('http').createServer(require('./app'));


const port = process.env.PORT || 3000;

if(process.env.SYNC){
  require('./db').syncAndSeed()
    .then(function(){
      console.log('synched and seeded');
    })
    .catch(function(err){
      console.log(err);
      throw err;
    });
}

server.listen(port, function(){
  console.log('listening on port ' + port);
});
