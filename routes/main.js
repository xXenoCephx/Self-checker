const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const title = 'Coronavirus';
	res.render('home', {title: title}) // views/home.handlebars
});
//Donate
router.get("/whyDonate",(req,res)=>{
    res.render("donation/whydonate") //whydonate.handlebars
});
//User
router.get("/register",(req,res)=>{
	res.render("user/register") //register.handlbars
});
router.get('/login', (req, res) => {
	res.render("user/login") //login.handlebars
});
router.get("/logout"),(req,res)=>{
	req.logout();
	res.redirect("/");
};

module.exports = router;