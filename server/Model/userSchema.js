const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// require('../index')
// mongoose.connect("mongodb://0.0.0.0:27017/Login_data")
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      }
    }
  ]
});

newSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hash(this.password, 12);
  }
  next();
});

newSchema.methods.generateAuthToken = async function () {
  try {
    const tokened = jwt.sign({ _id: this._id }, 'YOUR_SECRET_KEY');
    this.tokens = this.tokens.concat({ token: tokened });
    await this.save();
    return tokened;
  } catch (error) {
    console.log(error)
  }
};

const collection = mongoose.model("collection", newSchema);
module.exports = collection;