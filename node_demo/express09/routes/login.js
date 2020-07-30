const express = require("express");

const router = express.Router()

router.get("/",(req,res)=>{
       // req.query 获取get传值
    res.render("login",{})
})

router.post("/doLogin",(req,res)=>{
    // req.body 获取post传值
    var body = req.body;
    console.log(body)
    res.send("执行提交"+body.username+"-----"+body.password);
})

/*
app.get("/login",(req,res)=>{
    // req.query 获取get传值
    res.render("login",{})
})

app.post("/doLogin",(req,res)=>{
    // req.body 获取post传值
    var body = req.body;
    console.log(body)
    res.send("执行提交"+body.username+"-----"+body.password);
})
*/ 
module.exports = router