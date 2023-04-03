// const mongoose=require("mongoose")
// mongoose.set('strictQuery', true);

// mongoose.connect('mongodb://localhost:27017/Demo1DB').then(()=>{
//     console.log("connected")
// })

// const mongoose =require('mongoose');
// mongoose.set('strictQuery', true);
// const DB="mongodb+srv://Jash:Jashshah@demo.qr3xdep.mongodb.net/DemoDB1?retryWrites=true&w=majority";
// mongoose.connect(DB,{
//     useNewUrlparser:true,
//     useUnifiedTopology:true,
//     //  userCreateIndex :true,
//     //  useUnifiedTopology :true,
//     //  useFindAndModify :false
//  }).then(()=>{
//     console.log(`connection sucesfully`);
// }).catch((err)=>console.log(`no connection`));
//mongodb+srv://Jash:Jashshah@demo.qr3xdep.mongodb.net/?retryWrites=true&w=majority
const mongoose =require('mongoose');
// console.log("con")
const DB=process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlparser:true,
    useUnifiedTopology:true,
    //  userCreateIndex :true,
    //  useUnifiedTopology :true,
    //  useFindAndModify :false
 }).then(()=>{
    console.log(`connection sucesfully`);
}).catch((err)=>console.log(`no connection`));