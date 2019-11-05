const db=require('../util/database');


exports.getviewAtt=(req,res,next)=>{
res.render('viewatt',{
    pageTitle:'shweta',
    // StudentCount:52
});
}

exports.postviewAtt=(req,res,next)=>{
    // res.send('hey');
    // console.log('huff');
    const att=req.body.att;
    res.send(att);
    };


// exports.getAtt=(req,res,next)=>{

// };

// exports.postAtt=(req,res,next)=>{

// };
