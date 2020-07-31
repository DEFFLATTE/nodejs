const express = require("express");
const router = express.Router();

// 引入模块
const user = require("./admin/user")
const nav = require("./admin/nav")
const login = require("./admin/login")

router.get("/",(req,res)=>{
       res.send("后台管理中心")
})
// 挂载路由
router.use("/user",user)
router.use("/nav",nav)
router.use("/login",login)

module.exports = router