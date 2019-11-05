const db=require('../util/database');


exports.getviewAtt=(req,res,next)=>{
res.render('viewatt',{
    pageTitle:'shweta',
   
});
}

exports.postviewAtt=(req,res,next)=>{
    const att=req.body.att;
    res.send(att);
    };


// exports.getAtt=(req,res,next)=>{

// };

// exports.postAtt=(req,res,next)=>{

// };
