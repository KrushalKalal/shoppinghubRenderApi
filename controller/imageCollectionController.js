const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ImageCollection = require('../model/imageCollectionModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/imagecollection',async(req,res) => {
    try{
        let query = {}
    let collectionId = Number(req.query.collectionId);
    let brandId = Number(req.query.brandId);
    let discountId = Number(req.query.discountId)
    if(collectionId){
        query = {collectionCategory_id:collectionId}
    }else if(brandId){
        query = {brand_id:brandId}
    }else if(discountId){
        query = {discount_id:discountId}
    }else{
        query = {}
    }
    const data = await ImageCollection.find(query,{})
    res.send(data)
    }catch(err){
        console.log(err)
    }
    
})


module.exports = router;

