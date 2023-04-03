const registermodel=require('../Models/usersmodel');
const nodemailer = require('nodemailer')
const recutermodel= require('../Models/recutermodel');
const jwt = require('jsonwebtoken')
// const sendVerifyMail=async(name,email,user_id)=>{
//   console.log("verifymail")
//   try {
//     // 
//     let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'sjash525@gmail.com',
//         pass: '52747424'
//     }
// });

// // Define the email options
// let mailOptions = {
//     from: 'sjash525@gmail.com',
//     to: 'jashjash144@gmail.com',
//     subject: 'Hello World!',
//     text: 'This is a test email sent from Node.js using Nodemailer.'
// };

// // Send the email
// transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
//     //})
//   } catch (error) {
//     console.log(error.message);
//   }
// }

exports.register=async function(req,res)
{
    console.log("hello yo")
    const {
        name,
        email,
        number,
        password,
        workstatus
      } = req.body;
      try {
        const userexit = await registermodel.findOne({
          email: email
        });
        const username = await registermodel.findOne({
          name: name
        });
        if (userexit && username) {
          return res.status(422).json({
            error: "email & name is exits"
          });
        } else {
          console.log("create user");
          const object = new registermodel({
            name,
            email,
            number,
            workstatus,
            password,
          });
          //  hasing of password before save
          const a=await object.save();
          if(a){
            // sendVerifyMail(req.body.name,req.body.email,a._id)
            console.log("verifymail")
  try {
    // 
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '20ceuon126@ddu.ac.in',
        pass: 'Jashshah@123'
    }
});

// Define the email options
let mailOptions = {
    from: '20ceuon126@ddu.ac.in',
    to: req.body.email,
    subject: 'SignUp Successfull!',
    text: 'Welcome to the site Thanks for registering. Please login to enjoy the facility.'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
    //})
  } catch (error) {
    console.log(error.message);
  }
          }
          return res.status(200).json({
            message: "register sucessfully"
            
          });
        }
      } catch (err) {
        console.log(err);
      }
     
}
exports.auth=async function(req,res)
{
  const {
    email,
    password
  } = req.body;
  try {
    const user = await registermodel.findOne({ email:email });
    if (user) {
      // const ismatch = await bcrypt.compare(password, user.password);
      if (password!==user.password) {
        return res.status(400).json({
          error: "password incorrect"
        });
      }else if(user==='admin@gmail.com' && password==='admin'){
        return res.render("./admin.js")
      } 
      else {
        
          // sendVerifyMail(req.body.name,req.body.email,a._id)
          console.log("verifymail")
try {
  // 
  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: '20ceuon126@ddu.ac.in',
      pass: 'Jashshah@123'
  }
});

// Define the email options
let mailOptions = {
  from: '20ceuon126@ddu.ac.in',
  to: req.body.email,
  subject: 'Please Verify Yourself!',
  html: '<p> HI '+email+' please check link for verification <a href="http://localhost:3000/Frontpage">Verify</a></p>'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
      console.log(error);
  } else {
      console.log('Email sent: ' + info.response);
  }
});
  //})
} catch (error) {
  console.log(error.message);
}
        
        return res.status(201).json(user);

      }
    }else{
      return res.status(400).send({
        error: "invailad email"
      });
    }
  } catch (err) {
    console.log(err);
  }
}
exports.rauth=async function(req,res)
{
  const {
    email,
    name
  } = req.body;
  try {
    const user = await recutermodel.findOne({ email:email });
    if (user) {
      // const ismatch = await bcrypt.compare(password, user.password);
      if (name!==user.name) {
        return res.status(400).json({
          error: "password incorrect"
        });
      } 
      else {
        
          // sendVerifyMail(req.body.name,req.body.email,a._id)
          console.log("verifymail")
try {
  // 
  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: '20ceuon126@ddu.ac.in',
      pass: 'Jashshah@123'
  }
});

// Define the email options
let mailOptions = {
  from: '20ceuon126@ddu.ac.in',
  to: req.body.email,
  subject: 'Hello World!',
  html: '<p> HI '+email+' please check link for verification <a href="http://localhost:3000">Verify</a></p>'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
      console.log(error);
  } else {
      console.log('Email sent: ' + info.response);
  }
});
  //})
} catch (error) {
  console.log(error.message);
}
        
        return res.status(201).json(user);

      }
    }else{
      return res.status(400).send({
        error: "invailad email"
      });
    }
  } catch (err) {
    console.log(err);
  }
}
exports.update=async function(req,res){
  try {
      await registermodel.findOneAndUpdate({ user_id: req.body.id }, {
          $set: {
              name: req.body.name,
              email: req.body.email,
              number: req.body.number,
              
          }
      }, {
          new: true
      });
      const now = await registermodel.findOne({
          user_id: req.body.id
      });
      console.log(now);
      return res.status(400).json(now)
  } catch (err) {
      console.log(err);
    }
};