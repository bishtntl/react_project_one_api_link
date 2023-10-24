const bolly=require("../Controller/blogceteg")

const routOne=require("express").Router()
routOne.get('/dynamic/data',bolly)

module.exports=routOne