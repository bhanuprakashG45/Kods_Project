const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type:Boolean,
    default: false,
  },
});




const usersModel = mongoose.model('users', UsersSchema);

module.exports = usersModel;