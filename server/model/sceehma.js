
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const    userSchema= new Schema({
    name:String,
    lastname:String,
    email:String,
    passcode:String
   
})

const UserSchema = mongoose.model( 'UserSchema',   userSchema );

module.exports = UserSchema;