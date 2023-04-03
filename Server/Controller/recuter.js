const recutermodel=require('../Models/recutermodel');
exports.recuter=async function(req,res)
{
    console.log("hello yo")
    const {
        name,
        email,
        companyname,
        suggestion,
        link,
        
        workstatus
      } = req.body;
      try {
        const userexit = await recutermodel.findOne({
          email: email
        });
        const username = await recutermodel.findOne({
          name: name
        });
        if (userexit && username) {
          return res.status(422).json({
            error: "email & name is exits"
          });
        } else {
          console.log("create new suggestion");
          const like=0;
          
          const object = new recutermodel({
            name,
            email,
            companyname,
            workstatus,
            link,
            like,
            suggestion,
          });
          //  hasing of password before save
          await object.save();
 
          return res.status(200).json({
            message: "register sucessfully"
            
          });
        }
      } catch (err) {
        console.log(err);
      }
     
}
exports.recuterview=async function (req,res) {
  // console.log("Recuter");
  try {
      // const userdata = await (await registermodel.find({}));
      const userdata = await recutermodel.find({});
      return res.status(201).json(userdata);
      console.log(userdata);
    } catch (err) {
      console.log(err);
      
    }
  

}