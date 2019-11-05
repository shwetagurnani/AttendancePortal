const path=require('path');

const express=require('express');

const TeacherController=require('../controllers/teacher');

const router=express.Router();

router.get('/viewAtt',TeacherController.viewAtt);

router.get('/getAtt',TeacherController.getAtt);

router.post('/postAtt',TeacherController.postAtt);



module.exports=router;
