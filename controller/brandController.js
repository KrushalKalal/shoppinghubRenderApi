const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Brand = require('../model/brandModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/brandList',async (req,res) => {
    try{
      const data = await Brand.find({});
      res.send(data);
    }catch(err){
        console.log(err);
    }

})


module.exports = router;
