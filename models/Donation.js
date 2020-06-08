const seq=require("sequelize");
const db=require("../config/DBConfig");

const Donation=db.define("donation",{
    amount:{type:seq.INTEGER},
    email:{type:seq.STRING},
    message:{type:seq.STRING(250)},
    name:{type:seq.STRING},
    dateDonated:{type:seq.DATE}
});
module.exports=Donation;