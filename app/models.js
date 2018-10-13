var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    user = new Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String
    }),
    userModel = mongoose.model('user', user),

    login = new Schema({
        email: String,
        password: String
    }),
    loginModel = mongoose.model('login', login);


module.exports = {
    user: userModel,
    login: loginModel
};