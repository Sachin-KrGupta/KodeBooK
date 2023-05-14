var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var userSchema1=new mongoose.Schema({
  username:String,
  password:String,
  place:String,
  profile:String,
  occupation:String,
  bio:String
});

userSchema1.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema1);
