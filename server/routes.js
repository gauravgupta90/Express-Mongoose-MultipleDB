'use strict';

// Load modules

var User      = require('./controller/user'),
	testUser  = require('./controller/testUser'),
    Static    = require('./static');

// API Server Endpoints
module.exports = function(app){

	app.route('/user')
	   .post(User.create)
       .get(User.getAll);

    app.route('/user/:userid')
       .get(User.getOne)
       .put(User.update)
       .delete(User.remove);

    app.route('/testUser')
	   .post(testUser.create)
       .get(testUser.getAll);

    app.route('/testUser/:userid')
       .get(testUser.getOne)
       .put(testUser.update)
       .delete(testUser.remove);
}
