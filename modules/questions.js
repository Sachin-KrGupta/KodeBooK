var mongoose=require("mongoose");
var questionSchema=new mongoose.Schema({
    user: String,
    category: String,
    question: String,
    code:String,
    avatar: String,
    like:Number,
    time:String,
    answers: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Answer"
    }]
});

module.exports=mongoose.model("Question",questionSchema);