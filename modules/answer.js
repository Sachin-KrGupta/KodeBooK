var mongoose = require("mongoose");

var commentSchema=new mongoose.Schema({
    author:String,
    text:String
});

var answerSchema = mongoose.Schema({
    author:String,
    answer:String,
    comments:[commentSchema],
    upvotes:Number
});



module.exports = mongoose.model("Answer",answerSchema);