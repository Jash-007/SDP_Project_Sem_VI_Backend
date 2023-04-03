const mongoose=require("mongoose");

const recuterSchema=new mongoose.Schema({
    name:{type:String,require: [true, "Please enter name"]},
    email:{type:String,require: [true, "Please enter email"]},
    companyname:{type:String,require: [true, "Please enter company name"]},
    suggestion:{type:String,require: [true, "Please enter testseries"]},
    link: {type:String,require :[true,"Plese enter your suggestion link"]},
    workstatus:{type:String,require: [true, "Please enter your current workstatus"]},
    like: {type:Number},
    likearray: {type:Array,default:0},
    dislike:{type:Number,require: [true, "Please dislike"],default:0},
    dislikearray: {type:Array,default:0},
})

const recuter=mongoose.model("mainrecuter",recuterSchema);

module.exports=recuter;