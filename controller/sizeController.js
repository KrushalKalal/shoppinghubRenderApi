const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Size = require('../model/sizeModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/sizeList',async(req,res) => {
    try{
        const data = await Size.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
    
  
})


module.exports = router;