const db=require('../util/database');


exports.getLoginForm=(req,res,next)=>{
    res.render('login',{
     pageTitle:'login Form'
        
    });
};

exports.postLoginForm=(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    const post=req.body.post;
     if(username&&password&&post.localeCompare("student")==0)
     {
      db.query(' SELECT * FROM s  tudentdata WHERE username = ? AND password = ?', [username, password], function(error, results)
        {
        if(error)
        {
           console.log(error);
        }
          if(results.length>0)
          {
          req.session.loggedin=true;
          req.session.username=username;
          res.send('student front done');
          }
          else
         {
           res.send('wrong id and pass');
         }
       });
     }
  
     
     else if(username&&password&&post.localeCompare('teacher')==0)
     {
        db.query(' SELECT * FROM teacherdata WHERE username = ? AND password = ?', [username, password], function(error, results)
        {
        if(error)
        {
           console.log(error);
        }
          if(results.length>0)
          {
          req.session.loggedin=true;
          req.session.username=username;
          db.query('SELECT subject FROM allotment where teacher=?',[username], function(error, results)
          {
           if(error)
           console.log(error);
           res.render('teacherFront',{
            pageTitle:'teacher',
            prods:results
              
           });
          
          //res.send(ress);
        // res.send(results);
          });
          }
          else
         {
           res.send('wrong id and pass');
         }
       });
     }
     else if(username&&password&&post.localeCompare('admin')==0)
     {
        db.query(' SELECT * FROM admindata WHERE username = ? AND password = ?', [username, password], function(error, results)
        {
        if(error)
        {
           console.log(error);
        }
          if(results.length>0)
          {
          req.session.loggedin=true;
          req.session.username=username;
          res.redirect('admin front done');
          }
          else
         {
           res.send('wrong id and pass');
         }
       });
     }
     else
     {
     
      res.send('wrong id and pass');
      res.redirect('/login');
     }
    
}
