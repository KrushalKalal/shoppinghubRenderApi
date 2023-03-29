const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Gender = require('../model/genderModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/genderList',async(req,res) => {
    try{
        const data = await Gender.find({});
        res.send(data);
      }catch(err){
          console.log(err);
      }
 
})


module.exports = router;


