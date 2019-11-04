const path=require('path');

const express=require('express');

const TeacherController=require('../controllers/teacher');

const router=express.Router();

router.get('/teacher',TeacherController.getFront);

router.post('/teacher',TeacherController.postFront);

module.exports=router;