const mongoose=require('mongoose');

const AdminRequestSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    
    },
    name:{
        type:String,
        required:true
    },
    addmember:[
    
    ]
})
const ADMIN=mongoose.model('ADMIN',AdminRequestSchema);
module.exports=ADMIN;