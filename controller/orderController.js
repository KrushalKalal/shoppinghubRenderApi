const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Order = require('../model/orderModel');
const request = require('request');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/orderList',async (req,res) => {
    try{
        let email = req.query.email;
        let query = {}
        if(email){
            query = {email:email}
            //(or)query = {email}
        }
        const data = await Order.find(query,{})
        res.send(data)
    }catch(err){
        console.log(err)
    }
   
    
})

router.post('/placeOrder',async (req,res) => {
    try{
       const data = await  Order.create({
        order_id: req.body.order_id,
        name: req.body.name,
        email: req.body.email,
        address:req.body.address,
        phone:req.body.phone,
        cost:req.body.cost,
        productItem:req.body.productItem,
        status:req.body.status

    })
    res.send("order placed successfully")
    }catch(err){
        console.log(err)
    }
   
})

router.put('/updateOrder/:id',async (req,res)=>{
    try{
        let id = Number(req.params.id);
        const data = await Order.updateOne(
            {order_id:id},
             {
                $set:{
                    "status":req.body.status,
                    "bank_name":req.body.bank_name,
                    "date":req.body.date
                }
             })
             res.send("order updated successfully")
             console.log(data)
    }catch(err){
        console.log(err)
    }
    
  
})

router.delete('/deleteOrder/:id',async (req,res) => {
    try{
        let id =  Number(req.params.id)
        const data = await  Order.remove({order_id:id})
        res.send("order deleted")
        console.log(data)
    }catch(err){
        console.log(err)
    }
    
   
})

module.exports = router;





