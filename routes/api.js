const express  = require('express'),
      mongoose = require('mongoose')
      router   = express.Router()
      require('../mongo/mongo')
      require('../mongo/model/Model')
const User = mongoose.model('User')

//Queries
//GET 
router.get('/data/api',async(req,res)=>{
    try{
        const user = await User.find({})
        res.send(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})

//POST
router.post('/data/api',async(req,res)=>{
    try{
        const user = new User({
         name : req.body.name ,
         designation : req.body.designation ,
         summary : req.body.summary ,
         college : req.body.college ,
         duration: req.body.duration ,
         dept : req.body.dept ,
         address : req.body.address ,
         email : req.body.email,
         phone: req.body.phone,
         skills: req.body.skills,
         workexp : req.body.workexp ,
         projects : req.body.projects
          
        })
       await user.save()
        res.send(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})

//PUT 
router.put('/data/api/:id',async(req,res)=>{
    try{
    let {name,designation,summary,college,duration,dept,address,email,phone,skills,workexp,projects} = req.body
    const user = await User.findByIdAndUpdate({_id:req.params.id},{name,designation,summary,college,duration,dept,address,email,phone,skills,workexp,projects},
        {new:true, runValidators:true})
    res.send(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})


//DELETE
router.delete('/data/api/:id',async(req,res)=>{
    try{
    const user = await User.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(user)
    res.json(user)
    }
    catch(err){
        res.status(500).send(`error occured ${err}`)
    }
})





module.exports = router 