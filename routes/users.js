const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instainsta");// setting up database and initializing where is it on the laptop

const userSchema = mongoose.Schema({ //this code shows which all details from each user will be saved in database
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm); //provides serialized and deserialized users

module.exports = mongoose.model("user", userSchema);//allows us to create, read, update and delete from database