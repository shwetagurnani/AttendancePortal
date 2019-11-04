const path=require('path');

const express=require('express');

const loginController=require('../controllers/login');

const router=express.Router();

router.get('/login',loginController.getLoginForm);

router.post('/login',loginController.postLoginForm);


module.exports=router;