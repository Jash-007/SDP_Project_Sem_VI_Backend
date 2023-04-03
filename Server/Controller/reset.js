const registermodel=require('../Models/usersmodel');

const nodemailer = require('nodemailer');
exports.getmail=async function(req,res){
    console.log("getmail")
    const {
        email, 
      } = req.body;
     
       console.log("email: " + email)
            try {
                console.log("send mail")
                let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '20ceuon126@ddu.ac.in',
                    pass: 'Jashshah@123'
                }
              });
              
              // Define the email options
              let mailOptions = {
                from: '20ceuon123@ddu.ac.in',
                to: req.body.email,
                subject: 'Hello World!',
                html: '<p> HI  please check link for password updation <a href="http://localhost:3000/ResetPassword">Password Recovery</a></p>'
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
                      
                      return res.status(201);
              
        
  }
exports.updatepass=async function(req,res){
    console.log("updatepass")
    const {
        email, 
        password,
      } = req.body;
      console.log("email:"+email+"password: " + password)
    await registermodel.updateOne({ email: req.body.email }, {
        $set: {
            password: req.body.password,
        }
    }
    );
    console.log("updatedpassword")
    console.log('now');
    return res.status(201)
}
