var pmx = require('pmx');
var shelljs = require('shelljs');

function initActions(client) {

  // Show Configuration
  pmx.action('Show Configuration', function (reply) {
    shelljs.exec('nginx -V', {async: true, silent: true}, function (err, out) {
      if(err){
        return reply("Couldn't get conf: " + err);
      }

      reply(out);
    });
  });

   // Reload Configuration
  pmx.action('Reload Configuration', function (reply) {
    shelljs.exec('nginx -s reload', {async: true, silent: true}, function (err, out) {
      if(err){
        return reply("Couldn't get conf: " + err);
      }
      reply(out);
    });
  });
  
     // Restart Configuration
  pmx.action('Restart NGINX', function (reply) {
    shelljs.exec('nginx -s restart', {async: true, silent: true}, function (err, out) {
      if(err){
        return reply("Couldn't get conf: " + err);
      }
      reply(out);
    });
  });

}

function init(client) {
  initActions(client);
}

module.exports.init = init;
