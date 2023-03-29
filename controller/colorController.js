const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Color = require('../model/colorModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/colorList', async(req,res) => {
    
    try{
        const data = await Color.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
 
})


module.exports = router;