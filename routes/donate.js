const passport=require("passport");
const express=require("express");
const router=express.Router();
const Donation=require("../models/Donation");

router.get("/dankeDonation",(req,res)=>{
	res.render("./donation/dankeDonate");
})
router.post("/donating",(req,res)=>{
    let amount=req.body.donCupQty;
    let email=req.body.donEmail;
    let msg=req.body.donMsg;
    let name=req.body.donName;
    let datedonated=new Date();
    Donation.create({
        amount,
        email,
        msg,
        name,
        datedonated})
        .then(
            res.redirect("./dankeDonation") //danke.handlebars
        )
});
module.exports=router;