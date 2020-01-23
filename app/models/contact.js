const mongoose=require('mongoose')
const Schema=mongoose.Schema
const contactSchema=new Schema({
        name:{
            type:String,
            required:true,
            unique:true
        },
        phonenumber:{
            type:String,
            required:true,
            unique:true,
            maxlength:10
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:'User',
            required:true
        }
    })
const Contact=mongoose.model('Contact',contactSchema)
module.exports={
    Contact
}