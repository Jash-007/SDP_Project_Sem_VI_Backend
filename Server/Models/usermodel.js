// const mongoose=require("mongoose")
// const User=new mongoose.Schema({
//     name:String,
//     Email:String,
//     password:String,
// },{collation: "user-data"})
// const model1=mongoose.model("userdata",User)
// module.exports=model1
const mongoose=require("mongoose");

const registerSchema=new mongoose.Schema({
    name:{type:String,require: [true, "Please enter name"]},
    email:{type:String,require: [true, "Please enter email"]},
    number:{type:Number,require: [true, "Please enter mobile no."]},
    password:{type:String,require: [true, "Please enter password"]},
    workstatus:{type:String,require: [true, "Please Select your status"]},
})

const User=mongoose.model("mainuser",registerSchema);

module.exports=User;