const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const CollectionCategory = require('../model/colllectionCategoryModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/collectionCategories',async (req,res) => {
    try{
        const data = await CollectionCategory.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
    

})


module.exports = router;
