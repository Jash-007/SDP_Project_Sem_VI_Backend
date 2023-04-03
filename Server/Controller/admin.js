
const recutermodel=require('../Models/recutermodel')
const excel=require('exceljs')
const PDFDocument = require('pdfkit');
const fs = require('fs')
//import excel from 'exceljs'
// const Bcrypt = require("bcrypt");
const registermodel=require('../Models/usersmodel');
exports.adminview=async function (req,res) {
    // console.log("Admin");
    try {
        // const userdata = await (await registermodel.find({}));
        const userdata = await registermodel.find({});
      
        return res.status(201).json(userdata);
        console.log(userdata);
      } catch (err) {
        console.log(err);
        
      }
}
exports.adminrecuter=async function (req,res) {
  // console.log("Admin");
  try {
      // const userdata = await (await registermodel.find({}));
      const recuterdata = await recutermodel.find({});
    
      return res.status(201).json(recuterdata);
      console.log(recuterdata);
    } catch (err) {
      console.log(err);
      
    }
}
exports.adminrecuterview=async function (req,res) {
  console.log("Hello",req.body);
  try {
      // const userdata = await (await registermodel.find({}));
      const recuterdata = await recutermodel.find({ _id: req.body.id });
      console.log("rec",recuterdata);
      return res.status(201).json(recuterdata);
      
    } catch (err) {
      console.log(err);
      
    }
}
exports.searchuser=async function(req,res){

  //console.log("n:",name);
  try {
    console.log("Hellosearch")
    console.log(req.body.name);
    const records = await registermodel.findOne({
      name: req.body.name
    });
    console.log("rec",records);
    return res.status(201).json(records);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving records");
  }
}
exports.adminadd= async function (req, res)  {
 

    console.log("admnadd")
    const {
        name,
        email,
        number,
        workstatus,
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
           
          });
          //  hasing of password before save
          const a=await object.save();
          console.log(a)

          const userdata = await registermodel.find({});
          return res.status(201).json(userdata);}}catch (err) {
            console.log(err);
          }

    // req.body.pass = Bcrypt.hashSync(req.body.pass);
    // await registermodel.create(req.body);
    // return res.status(301).redirect("/");


};
exports.adminRadd= async function (req, res)  {
 

  console.log("adimnadd")
  const {
      name,
      email,
      companyname,
      like,
      dislike,
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
        console.log("create user");
        const object = new recutermodel({
          name,
          email,
          companyname,
          like,
          dislike
         
        });
        //  hasing of password before save
        const a=await object.save();
        console.log(a)

        const recuterdata = await recutermodel.find({});
        return res.status(201).json(recuterdata);}}catch (err) {
          console.log(err);
        }

  // req.body.pass = Bcrypt.hashSync(req.body.pass);
  // await registermodel.create(req.body);
  // return res.status(301).redirect("/");


};
exports.admindelete= async function (req, res) {
  try {
    console.log("delete");
    console.log(req.body._id);
   await registermodel.deleteOne({_id:req.body._id});
    return res.status(201).json("deleted");
} catch (error) {
    console.log(error);
}
};
exports.adminrecuterdelete= async function (req, res) {
  try {
    console.log("delete");
    console.log(req.body._id);
   await recutermodel.deleteOne({_id:req.body._id});
    return res.status(201).json("deleted");
} catch (error) {
    console.log(error);
}
};

exports.adminedit=async function(req,res){
try { 
  console.log(req.body)
  await registermodel.updateOne(
    { _id: req.body.id }, {
    $set: {
        name: req.body.users.name,
        email: req.body.users.email,
        number: req.body.users.number,
    }
}, {
    new: true
});
const now = await registermodel.findOne({
    _id: req.body.id
});
console.log('now',now);
return res.status(201).json(now)

//   let record = await registermodel.findOne({ _id: req.body._id });

//   // if (record !== null && req.query._id !== record._id.toString()) {
//   //     return res.status(200).render("edit-record", {
//   //         record: req.body,
//   //         swr: true,
//   //         em: "Record already exist with email"
//   //     });
//   // }

//   record = new Object();
//   record.email = req.body.email;
//   record.name = req.body.name;
//   record.number = req.body.number;

// //   if (req.body.pass)
// //       record.pass = Bcrypt.hashSync(req.body.pass)

//   await registermodel.updateOne(
//       { _id: req.query._id },
//       { $set: record }
//   );
//   const userdata = await registermodel.find({});
//   return res.status(201).json(userdata);

} catch (error) {
  return res.status(401).json(error);
}


}
exports.admineditrecuter=async function(req,res){
  try { 
    console.log(req.body)
    await recutermodel.updateOne(
      { _id: req.body.id }, {
      $set: {
          name: req.body.users.name,
          email: req.body.users.email,
          companyname: req.body.users.companyname,
          like: req.body.users.like,
          dislike: req.body.users.dislike,
      }
  }, {
      new: true
  });
  const now = await recutermodel.findOne({
      _id: req.body.id
  });
  console.log('now',now);
  return res.status(201).json(now)
  
  //   let record = await registermodel.findOne({ _id: req.body._id });
  
  //   // if (record !== null && req.query._id !== record._id.toString()) {
  //   //     return res.status(200).render("edit-record", {
  //   //         record: req.body,
  //   //         swr: true,
  //   //         em: "Record already exist with email"
  //   //     });
  //   // }
  
  //   record = new Object();
  //   record.email = req.body.email;
  //   record.name = req.body.name;
  //   record.number = req.body.number;
  
  // //   if (req.body.pass)
  // //       record.pass = Bcrypt.hashSync(req.body.pass)
  
  //   await registermodel.updateOne(
  //       { _id: req.query._id },
  //       { $set: record }
  //   );
  //   const userdata = await registermodel.find({});
  //   return res.status(201).json(userdata);
  
  } catch (error) {
    return res.status(401).json(error);
  }
  
  
  }
  exports.downloaddata=async function(req,res) {
    // try {
    //   console.log("download data");
    //   const workbook=new excel.Workbook();
    //   const worksheet=workbook.addWorksheet("mydata");
    //   worksheet.columns=[
    //     {header: "ID", key:"_id"},
    //     {header: "Name", key:"name"},
    //     {header: "Number",key:"number"},
    //     {header: "Email", key:"email"},
    //   ];
    //   let counter=1;
    //   const userdata=await registermodel.find({});
    //   userdata.forEach((user) => {
    //     user.id = counter;
    //     worksheet.addRow(user);
    //     counter++;
    //     console.log(counter);
    //   });
    //   worksheet.getRow(1).eachCell((cell)=>{
    //     cell.font={bold:true,italic:true,underline:true}
    //   });
    //   // res.header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    //   // res.header("Content-Disposition", "attachment; filename=reactsitedata.xlxs");
    //   return workbook.xlsx.writeFile("Users.xlxs").then(()=>res.status("Done"));
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      const users = await registermodel.find();
      const doc = new PDFDocument();
      const filename = 'users.pdf';
      res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
      res.setHeader('Content-type', 'application/pdf');
      doc.pipe(res);
      doc.fontSize(20).text('User List', {align: 'center'});
      doc.moveDown();
      doc.fontSize(12).text('ID\tName\tEmail\tNumber', {underline: true,bold: true});
      users.forEach(user => {
        doc.moveDown().fontSize(10).text('ID:'+user._id +'\n'+'Name:'+ '\t' + user.name + '\n'+'Email:'+'\t' + user.email+'\n'+'Number' +'\t'+ user.number );
      });
      doc.end();
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }
  
  exports.Rdownloaddata=async function(req,res) {
    // try {
    //   console.log("download data");
    //   const workbook=new excel.Workbook();
    //   const worksheet=workbook.addWorksheet("mydata");
    //   worksheet.columns=[
    //     {header: "ID", key:"_id"},
    //     {header: "Name", key:"name"},
    //     {header: "Number",key:"number"},
    //     {header: "Email", key:"email"},
    //   ];
    //   let counter=1;
    //   const userdata=await registermodel.find({});
    //   userdata.forEach((user) => {
    //     user.id = counter;
    //     worksheet.addRow(user);
    //     counter++;
    //     console.log(counter);
    //   });
    //   worksheet.getRow(1).eachCell((cell)=>{
    //     cell.font={bold:true,italic:true,underline:true}
    //   });
    //   // res.header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    //   // res.header("Content-Disposition", "attachment; filename=reactsitedata.xlxs");
    //   return workbook.xlsx.writeFile("Users.xlxs").then(()=>res.status("Done"));
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      const users = await recutermodel.find();
      const doc = new PDFDocument();
      const filename = 'guider.pdf';
      res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
      res.setHeader('Content-type', 'application/pdf');
      doc.pipe(res);
      doc.fontSize(20).text('User List', {align: 'center'});
      doc.moveDown();
      doc.fontSize(12).text('ID\tName\tEmail\tNumber', {underline: true,bold: true});
      users.forEach(user => {
        doc.moveDown().fontSize(10).text('ID:'+user._id +'\n'+'Name:'+ '\t' + user.name + '\n'+'Email:'+'\t' + user.email+'\n'+'Number' +'\t'+ user.number );
      });
      doc.end();
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  }