const mySQLDB = require("./DBConfig");
const CommCreate = require("../models/Community/Create");
const CommFeedback = require("../models/Community/Feedback");
const SupportDonation=require("../models/Support/Payup");

const setUpDB = (drop) => {
    mySQLDB.authenticate().then(() => {
        console.log("Community database connected");
    }).then(() => {
        mySQLDB.sync({
            force: drop
        }).then(() => {
            console.log("Create table if non exists")
        }).catch(err => console.log(err))
    }).catch(err => console.log("Error" + err));
};

module.exports = {setUpDB};