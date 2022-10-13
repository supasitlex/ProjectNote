const express = require('express');
const { model, Schema } = require('mongoose') 
const router = express.Router();

const noteSchema = new Schema({
    title: String,
    text: String,
    date: Date
},{
    collection : 'note',
    versionKey : false
});

const Note = model('note',noteSchema) //create Model

router.get('/',(req,res)=>{
    res.status(200).json({
        resultCode :20000,
        resultData: 'this is note note'
    });
})
router.get('/findall',async (req,res)=>{
    const findall = await Note.find({})
    res.status(200).json({
        resultCode :20000,
        resultData: findall
    });
})

router.post('/create',async (req,res)=>{
    const {title,text} = req.body
    console.log(title,text);
    const result = await Note.create({
        title : title,
        text : text,
        date : Date.now()
    })
    res.status(201).json({
        resultCode : 20100,
        resultDscription :'Create Success' ,
        reultData : result
    })
})

module.exports = router;