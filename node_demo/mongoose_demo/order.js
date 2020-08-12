// 关联查询
// order表关联order_item
var OrderModel=require('./module/order.js');

// 查询order表的数据
/*
OrderModel.find({},function(err,docs){
    console.log(docs)
})
*/

OrderModel.aggregate([
    {
        $lookup:
            {
                from:"order_item",
                localField:"order_id",
                foreignField:"order_id",
                as:"items"
            }
    },
    {
        $match:{"all_price":{$gte:90}}
    }
],function(err,docs){
    if(err){
        console.log(err)
        return;
    }
    console.log(docs)
})
