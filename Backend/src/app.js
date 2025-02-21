const express = require('express');

const app = express()


app.get('/',(req,res)=>{
    res.send("hey Yash!");
})
module.exports = app;
const app = express()


app.get('/',(req,res)=>{
    res.send("hey Yash!");
})
app.use('/ai',aiRoutes)
module.exports = app;