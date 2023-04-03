// const mongoose = require('mongoose');
// const express = require('express');
// require('./DB/config');
// var cors = require('cors');
// const User = require('../Server/Models/usermodel');
// const app = express();
// app.use(cors());
// mongoose.set('strictQuery', true);
// app.use(express.json())

// app.post('/register',async (req,res)=>{
//     const{name,Email,password}=req.body;
//     const user = new User({
//         name,
//         Email,
//         password
//       });
//       res.json({status:"OK"})
//       console.log(name,Email,password)
//       //res.send("sucess")
//       //  hasing of password before save
//       await user.save();
    
// })
// app.listen(5000, () => {
//     console.log(`server is running on ${5000} port`);
// })
//mongodb+srv://Jash:Jashshah@demo.qr3xdep.mongodb.net/?retryWrites=true&w=majority


const dotenv=require("dotenv");
const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
var cors = require('cors')

const express=require('express');
// const router = require("./routes/mainuser");
// const { register } = require("./Controllers/user");
const app=express();
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'Cg9F2N6qz9hnkJ2rnoMpQ77Vz5pYqRdG',
  issuerBaseURL: 'https://dev-kfn2sbkoqz2ijx1d.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
dotenv.config({path :'.env'});
require('./DB/config')
app.use(express.urlencoded({ extended :false}));
app.use(express.json())
app.use(cors());
// app.get('/login', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   });

// const user_routes=require('./Router/user');
app.use(require('./Router/user.js'));

// app.use(require('./Router/adminr'));
//router.post("/signup",register)
const port =process.env.port;
app.listen(port,()=>{
    console.log(`server is running on ${port} port`);
})
console.log("moanan")