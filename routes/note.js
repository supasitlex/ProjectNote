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

//findall
router.get('/',async (req,res)=>{
    const findall = await Note.find({})
    res.status(200).json({
        resultCode :20000,
        resultData: findall
    });
})

//findone
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const result = await Note.findById(id); 
    if(!result){
        return res.status(404).json({
            resultCode : 40400,
            resultDescription : "Not found"
        })
    }
    res.status(200).json({
        resultCode : 20000,
        resultDescription : "Success",
        resultData: result
    })
    // console.log(result)
})

//create
router.post('/',async (req,res)=>{
    const {title,text} = req.body
    console.log(title,text);
    const result = await Note.create({
        title : title,
        text : text,
        date : Date.now()
    })
    res.status(201).json({
        resultCode : 20100,
        resultDescription :'Create Success' ,
        resultData : result
    })
})

//update
router.put('/:id',async(req,res)=>{
    const {id} = req.params;
    const {title,text} = req.body

    await Note.findByIdAndUpdate(id,{
        title,
        text
    })
    res.status(200).json({
        resultCode : 20000,
        resultDescription : 'Update Success',
        // resultData : find_id
    })
})

//delete
router.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    const find_id = await Note.findByIdAndDelete(id)
    if(!find_id){
        return res.status(404).json({
            resultCode :40400,
            resultDescription : "Not Found to Delete",
        })
    }
    res.status(200).json({
        resultCode : 20000,
        resultDescription : 'Delete Success',
        resultData : find_id
    })
})

module.exports = router;