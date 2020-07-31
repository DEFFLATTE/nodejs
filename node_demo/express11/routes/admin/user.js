const express = require("express");
const tools = require("../../module/tools")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("用户列表")
})
router.get("/add",(req,res)=>{
    res.render("admin/user/add")
})
router.post("/doAdd",tools.multer().fields([
    { name: 'pic1', maxCount: 1 },
    { name: 'pic2', maxCount: 1 }
  ]),(req,res)=>{
    // 获取表单传过来的数据
    res.send({body:req.body,flies:req.files})
})

module.exports = router