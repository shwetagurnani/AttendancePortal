const express=require('express');
const app=express();
app.get('/',function(req,res){
res.send('Hii');
});




app.listen(3000);
