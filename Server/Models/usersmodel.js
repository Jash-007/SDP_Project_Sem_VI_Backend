const mongoose=require("mongoose");

const registerSchema=new mongoose.Schema({
    name:{type:String,require: [true, "Please enter name"]},
    email:{type:String,require: [true, "Please enter email"]},
    number:{type:Number,require: [true, "Please enter mobile no."]},
    password:{type:String,require: [true, "Please enter password"]},
    workstatus:{type:String,require: [true, "Please Select your status"]},
})

const User=mongoose.model("user",registerSchema);

module.exports=User;