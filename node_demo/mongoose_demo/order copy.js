/*查询order_item.找出商品名称是酸奶的商品，酸奶这个商品对应的订单的订单号以及订单的总价格*/


var OrderItemModel=require('./module/order_item');
var mongoose=require('./db.js');
const { Schema } = require('mongoose');

//mongoose获取ObjectId   mongoose.Types.ObjectId
OrderItemModel.aggregate([
    {
        $lookup:
            {
                from:"order",
                localField:"order_id",
                foreignField:"order_id",
                as:"order_info"
            }
    },{
        $match:{_id:mongoose.Types.ObjectId('xxxxxxxxxxxxxxxx')}
    }
],function(err,docs){
    if(err){
        console.log(err)
        return
    }
    console.log(JSON.stringify(docs));
})