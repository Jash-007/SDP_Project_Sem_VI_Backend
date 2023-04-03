const mongoose=require("mongoose");

const feedbackSchema=new mongoose.Schema({
    name:{type:String,require: [true, "Please enter name"]},
    email:{type:String,require: [true, "Please enter email"]},
    message:{type:String,require: [true, "Please enter company name"]},
    
})

const feedback=mongoose.model("mainfeedback",feedbackSchema);

module.exports=feedback;