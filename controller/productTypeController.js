const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ProductType = require('../model/productTypeModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/productTypeList',async(req,res) => {
    try{
        const data = await ProductType.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
    
   
})


module.exports = router;