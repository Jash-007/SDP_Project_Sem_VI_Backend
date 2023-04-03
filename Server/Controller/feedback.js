const feedbackmodel=require('../Models/feedbackmodel');
exports.feedback=async function(req,res)
{
    console.log("hello yo")
    const {
        name,
        email,
        message
       
      } = req.body;
      try {
        const userexit = await feedbackmodel.findOne({
          email: email
        });
        const username = await feedbackmodel.findOne({
          name: name
        });
        if (userexit && username) {
          return res.status(422).json({
            error: "email & name is exits"
          });
        } else {
          console.log("create new suggestion");
          const object = new feedbackmodel({
            name,
            email,
            message,
           
          });
          //  hasing of password before save
          await object.save();
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
            html: '<p> HI '+email+' Thanks for your Feedback!! Its the great to have a reply from your side</p>'
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
          return res.status(200).json({
            message: "register sucessfully"
            
          });
        }
      } catch (err) {
        console.log(err);
      }
     
}