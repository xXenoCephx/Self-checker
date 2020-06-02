const seq=require("sequelize");
const db=require("../config/DBConfig");

const Donation=db.define("donation",{
    amount:{type:seq.INTEGER},
    email:{type:seq.STRING},
    message:{type:seq.STRING},
    name:{type:seq.STRING}
});
module.exports=Donation;