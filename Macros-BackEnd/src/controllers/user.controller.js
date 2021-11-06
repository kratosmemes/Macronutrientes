const bcrypt = require('bcrypt');

let UserControllers = {}
const UserModel = require('../models/user.model');

UserControllers.getUsers =async function(req,res){
    UserModel.find()
        .then(response=>{
            res.json(response);
        })
        .catch(err=>{
            res.json(err);
        });
}

UserControllers.addUser = async function(req,res){
    let newUser = new UserModel ({
        FirstName: req.body.FirstName , 
        LastName: req.body.LastName ,
        Email: req.body.Email ,
        Nickname: req.body.Nickname,
        Password: bcrypt.hashSync(req.body.Password,10)
    });
    
    await newUser.save()
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        });
    
}

UserControllers.updateUser = async function(req,res){
    let id = req.params.id;
    updatedUser = req.body;
    
    await UserModel.findByIdAndUpdate(id,updatedUser)
        .then(response=>{
            res.json(response);
        })
        .catch(err=>{
            res.json(err);
        });

}

UserControllers.deleteUser = async function(req,res){
    let id =  req.params.id;
    UserModel.findByIdAndDelete(id)
        .then(response=>{
            res.json(response);
        })
        .catch(err=>{
            res.json(err);
        })

}
module.exports = UserControllers;