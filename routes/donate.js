const express=require("express");
const router=express.Router();
const payup=require("../models/Support/Payup")

router.get("/SupportUs",(req,res)=>{
    res.render("./donate/whySupport");
});
router.get("/ThanksForSupporting",(req,res)=>{
    res.render("./donate/postSupport");
})
router.post("/processPayment",(req,res,next)=>{
    let amt=req.body.donAmt;
    let email=req.body.donEmail;
    let name=req.body.donName;
    let msg=req.body.donMsg;

    var date= new Date();
    let dateDonate=date.toLocaleDateString("en-sg");
    
    payup.create({
        amt,
        email,
        name,
        msg,
        dateDonate
        
    })
    .then(()=>{
        res.redirect("./ThanksForSupporting");
    })
});
module.exports=router;