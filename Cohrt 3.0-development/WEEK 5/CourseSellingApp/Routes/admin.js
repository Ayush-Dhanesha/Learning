const {Router} = require('express');

const adminRouter = Router();

const {adminModel} = require('../db');

adminRouter.post('/signup', function(req, res){
    res.json({
      message: 'User created'
    });
  });

adminRouter.post('/signin', function(req, res){
    res.json({
      message: 'User created'
    });
  });

adminRouter.post('/courses', function(req, res){
    res.json({
      message: 'User created'
    });
  });

adminRouter.put('/courses', function(req, res){
  res.json({
    message: 'User created'
  });
});

adminRouter.get('/course/bulk', function(req, res){
  res.json({
    message: 'User created'
  });
});

module.exports = {
    adminRouter: adminRouter
}