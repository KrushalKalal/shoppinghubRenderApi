const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Discount = require('../model/discountModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/discountList',async (req,res) => {
    try{
        const data = await Discount.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
    

})


module.exports = router;