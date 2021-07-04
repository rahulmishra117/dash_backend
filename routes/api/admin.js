const express=require('express');
const router=express.Router();
const adminapi=require('../../controller/AdminApi');

router.post('/send',adminapi.sendRequest);
router.get('/data',adminapi.getRequest);

module.exports=router;