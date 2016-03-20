'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var conn1     = mongoose.createConnection('mongodb://localhost/mainDB');
var conn2     = mongoose.createConnection('mongodb://localhost/log');

console.log("DB Initialized");

/**
  * @module  User
  * @description contain the details of user  
*/

var UserSchema = new Schema({
  
  /** 
    User ID. It can only contain string, is required and unique field which is indexed.
  */
  userId : { type: String, unique: true, required: true },

  /** 
    User Name. It can only contain string, is required field.
  */
  username : { type: String, required: true },

  /** 
    First Name. It can only contain string, is required field.
  */

  firstname : { type: String, required: true },

  /** 
    Last Name. It can only contain string.
  */

  lastname : { type: String }
  
});

UserSchema.statics.getAllUsers= function(callback) {
    this.find({}, callback);
};

UserSchema.statics.getUser= function(userId, callback) {
    this.findOne({'userId': userId}, callback);
};

UserSchema.statics.createUser = function(requestData, callback) {
    this.create(requestData, callback);
};

UserSchema.statics.updateUser = function(userId, username, callback) {
    this.findOneAndUpdate({'userId': userId}, { $set: { 'username': username }}, callback);
};

UserSchema.statics.removeUser = function(userId, callback) {
    this.remove({'userId': userId}, callback);
};

var user = conn1.model('user', UserSchema);


var testSchema = new Schema({
  
  /** 
    User ID. It can only contain string, is required and unique field which is indexed.
  */
  userId : { type: String, unique: true, required: true },

  /** 
    User Name. It can only contain string, is required field.
  */
  username : { type: String, required: true },

  /** 
    First Name. It can only contain string, is required field.
  */

  firstname : { type: String, required: true },

  /** 
    Last Name. It can only contain string.
  */

  lastname : { type: String }
  
});

testSchema.statics.getAllTestUsers= function(callback) {
    this.find({}, callback);
};

testSchema.statics.getTestUser= function(userId, callback) {
    this.findOne({'userId': userId}, callback);
};

testSchema.statics.createTestUser = function(requestData, callback) {
    this.create(requestData, callback);
};

testSchema.statics.updateTestUser = function(userId, username, callback) {
    this.findOneAndUpdate({'userId': userId}, { $set: { 'username': username }}, callback);
};

testSchema.statics.removeTestUser = function(userId, callback) {
    this.remove({'userId': userId}, callback);
};

var testUser = conn2.model('testUser', testSchema);


/** export schema */
module.exports = {
    User : user,
    testUser : testUser
};