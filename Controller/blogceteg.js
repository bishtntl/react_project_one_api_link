const blogData=require("../Data/dummmyData");

const bolly=(req,res)=>{
    return res.send(blogData)
}

module.exports=bolly