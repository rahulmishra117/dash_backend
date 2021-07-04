const Admin=require('../models/Admin');

module.exports.getRequest=async function(request,response){
    try{
        let data= await Admin.find({});
       return response.status(200).json({
           data:data,
           message:"All User Data"
       });

    }catch(err){
        return response.status(500).json({
            message:'Internal Server Error'

        })
    }
}

module.exports.sendRequest=async function(request,response)
{
    try{
        const {email}=request.body
        const {name} =request.body

        let send=await Admin.create({
            email,name
        })
return response.status(201).json(send);
    }catch(err){
        console.log(err);
        return response.status(500).json({
            message:'Internal Server error'
        })
    }
}