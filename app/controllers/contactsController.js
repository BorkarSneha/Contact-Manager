const {Contact}=require('../models/contact')

module.exports.list=(req,res)=>{
    const pagenum=parseInt(req.query.pagenumber)
    Contact.find({user:req.user._id}).skip(pagenum).limit(pagenum)
           .then((contacts)=>{
               res.json(contacts)
           })
           .catch((err)=>{
               res.json(err)
           })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Contact.findOne({_id:id,user:req.user._id})
           .then((contact)=>{
               if(contact){
                   res.json(contact)
               }else{
                   res.json({})
               }
           })
           .catch((err)=>{
               res.json(err)
           })
}
module.exports.create=(req,res)=>{
    
    const body=req.body
    const contact=new Contact(body)
    contact.user=req.user._id
    contact.save()
           .then((contact)=>{
               res.json(contact)
           })
           .catch((err)=>{
               res.json(err)
           })
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Contact.findOneAndUpdate({_id:id,user:user._id},body,{new:true,runvalidators:true})
           .then((contact)=>{
               if(contact){
                   res.json(contact)
               }else{
                   res.json({})
               }
           })
           .catch((err)=>{
               res.json(err)
           })
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Contact.findOneAndDelete({_id:id,user:req.user._id})
           .then((contact)=>{
               if(conatct){
                   res.json(contact)
               }else{
                   res.json({})
               }
           })
           .catch((err)=>{
               res.json(err)
           })
}