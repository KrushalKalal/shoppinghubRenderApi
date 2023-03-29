const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Occasion = require('../model/occasionModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/occasionList',async (req,res) => {
    try{
        const data = await Occasion.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
    
    
})


module.exports = router;