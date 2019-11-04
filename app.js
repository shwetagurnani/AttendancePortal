const path=require('path');

const express=require('express');
const bodyParser=require('body-parser');
const session = require('express-session');

const db=require('./util/database');

const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

const loginRoutes=require('./routes/login');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoutes);




app.listen(2000);
