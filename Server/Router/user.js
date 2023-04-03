const router=require('express').Router();
const user_controller=require('../Controller/user.js')
const admin_controller=require('../Controller/admin.js')
const recuter_controller=require('../Controller/recuter.js')
const feedback_controller=require('../Controller/feedback.js')
const like_controller=require('../Controller/like.js')
const reset_controller=require('../Controller/reset.js')
console.log("hello ji")
router.post("/signup",user_controller.register);
router.post("/login",user_controller.auth);
router.post("/loginrecuter",user_controller.rauth);
router.post("/updatedata",user_controller.update);
router.get("/admin",admin_controller.adminview);
router.get("/adminrecuter",admin_controller.adminrecuter);
router.post("/search",admin_controller.searchuser);
router.post("/adminrecuterview",admin_controller.adminrecuterview);
router.get("/vrecuter",recuter_controller.recuterview);
router.post("/recuter",recuter_controller.recuter);
router.post("/feedback",feedback_controller.feedback);
router.post("/adminadd",admin_controller.adminadd);
router.post("/adminrecuteradd",admin_controller.adminRadd);
router.post("/adminedit",admin_controller.adminedit);
router.post("/admineditrecuter",admin_controller.admineditrecuter);
router.post("/admindelete",admin_controller.admindelete);
router.post("/adminrecuterdelete",admin_controller.adminrecuterdelete);
router.post("/like",like_controller.like);
router.post("/dislike",like_controller.dislike);
router.post("/forgotpass",reset_controller.getmail);
router.post("/updatepassword",reset_controller.updatepass);
router.get("/downloaddata",admin_controller.downloaddata);
router.get("/Rdownloaddata",admin_controller.Rdownloaddata);
// router.post("/admin",adminroute.admin)
module.exports=router;