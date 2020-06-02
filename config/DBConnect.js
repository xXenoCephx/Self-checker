const mySQLDB=require("./DBConfig")
const donation=require("../models/Donation")

const setUpDB =(drop)=>{
    mySQLDB.authenticate()
        .then( ()=>{
            console.log("Selfchecker database connected")
        })
        .then( ()=>{
            mySQLDB.sync({
                force:drop
            }).then( 
                ()=>{console.log("Create tables if none")} 
            ).catch(err =>console.log(err))
        }).catch(err =>console.log("Error:"+err));
};
module.exports={setUpDB};