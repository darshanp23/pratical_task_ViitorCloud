const mongoose = require('../services/mongodb.service').getAppAPIMongoDB()

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'First name is required']
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, props => (`${props.value} is not a valid Email!`)]
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  profilePic: {
    type: String
  },
  sessionID: {
    type: String,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema)
