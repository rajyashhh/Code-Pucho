const express = require('express');
const aiRoutes=require('./route/ai.routes');

const app = express()


app.get('/',(req,res)=>{
    res.send("hey Yash!");
})
app.use('/ai',aiRoutes)
module.exports = app;
module.export=app;