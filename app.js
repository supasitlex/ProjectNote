const express = require('express'); //import
const morgan = require('morgan'); //log
const mongoose = require('mongoose');
const helmet = require("helmet");
const app = express() //function
const port = 3000 
const note = require('./routes/note');

app.use(morgan('tiny'));
app.use(express.json());
app.use(helmet());

// app.use('/home',note)
app.use('/api/notes',note);


mongoose.connect('mongodb://localhost:27017',{dbName:'Notetest'})
.then(()=>console.log('Connect to mongoDB'))
.catch((err)=>console.log('Error',err))



// app.get('/',(req,res)=>{
//     res.status(200).json({
//         resultCode : 20000,
//         resultData : 'Hello'
//     });
// })

app.listen(port,()=>{console.log(`Port: ${port}`)})
