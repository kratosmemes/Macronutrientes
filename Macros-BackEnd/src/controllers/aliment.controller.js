const AlimentModel = require('../models/aliment.model')
const { response } = require('express');
let _ = require('underscore');
let AlimentControllers = {}

AlimentControllers.getAliments = async function(req,res){
    await AlimentModel.find()
        .then(response=>{
            res.json(response);
        })
        .catch(err=>{
            res.json(err);
        })
}

AlimentControllers.createAliment =  async function(req,res){
    let newAliment = AlimentModel({
        AlimentName:req.body.AlimentName,
        Calories:req.body.Calories,
        Fat:req.body.Fat,
        Carbohidrats:req.body.Carbohidrats,
        Protein:req.body.Protein,
        Day:req.body.Day,
        UserId: req.body.UserId
    });

    await newAliment.save()
        .then(response=>{
            res.json(response);
        })
        .catch(err=>{
            res.json(err);
        });
}   

AlimentControllers.updateAliment = async function(req,res){
    _id = req.params.id;
    console.log("ID: " + _id);
    let newAliment = _.pick(req.body, ['AlimentName', 'Calories', 'Fat', 'Carbohidrats', 'Protein', 'Day']);

    await AlimentModel.findByIdAndUpdate(_id , {$set: newAliment} , {new:true} , function(err , response){
        if(err){
            res.json(err);
        }else{
            res.json(response);
        }
    });
}

AlimentControllers.deleteAliment = async function(req,res){
    _id = req.params.id;
    await AlimentModel.findByIdAndDelete(_id)
            .then(response=>{
            res.json(response);
        })
        .catch(err=>{
            res.json(err);
        });
}

module.exports = AlimentControllers;