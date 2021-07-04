const express=require('express');
const app=express();
const port =  process.env.PORT || 8000;
const db=require('./config/mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',require('./routes'));
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in the port !!!",err);
    }
    console.log("Working fine at the Port number",port);
})