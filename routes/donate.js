const passport=require("passport");
const express=require("express");
const router=express.Router();
const donation=require("../models/Donation")

router.post("/donating",(req,res,next)=>{
    res.redirect("donation/dankeDonate"); //danke.handlebars
});
