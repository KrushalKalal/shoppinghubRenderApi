const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ProductCategory = require('../model/productCategoryModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/productCategories',async(req,res) => {
    try{
        const data = await ProductCategory.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
    
   
})


module.exports = router;