const express = require('express');
const router =  express.Router();
const ownersModel = require('../models/owners-model');

// if(process.env.NODE_ENV === "development"){
    router.post('/create', async (req, res)=>{
        let owners = await ownersModel.find();
        if(owners.length > 0){
            return res.send(503).send("you dont have permission");
        }
        let {fullname , password, email} = req.body;

        let createdOwner = await ownersModel.create({
            fullname,
            email,
            password
        });
        res.status(201).send(createdOwner);
    })
// }

router.get("/", (req, res)=>{
    res.send("working");
});

module.exports = router;
