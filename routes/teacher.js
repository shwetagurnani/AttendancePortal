const path=require('path');

const express=require('express');

const TeacherController=require('../controllers/teacher');

const router=express.Router();

router.get('/viewAtt',TeacherController.getviewAtt);

router.post('/viewAtt',TeacherController.postviewAtt);

// router.get('/Att',TeacherController.getAtt);

// router.post('/Att',TeacherController.postAtt);

module.exports=router;
