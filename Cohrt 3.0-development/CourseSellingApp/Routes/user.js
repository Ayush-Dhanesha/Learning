const {Router} = require('express');

const userRouter = Router();

const {userModel} = require('../db');   

userRouter.post('/user/signup', function(req, res){
    res.json({
      message: 'User created'
    });
  });

userRouter.post('/user/signin', function(req, res){
    res.json({
      message: 'User created'
    });
  });

userRouter.get('/user/purchases', function(req, res){
    res.json({
      message: 'User created'
    });
  });

module.exports = {
    userRouter: userRouter
}