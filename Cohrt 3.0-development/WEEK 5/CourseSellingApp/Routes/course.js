const {Router} = require('express');

const courseRouter = Router();

const {courseModel} = require('../db');


courseRouter.post('/course/purchase', function(req, res){
    res.json({
      message: 'User created'
    });
  });

courseRouter.post('courses', function(req, res){
    res.json({
      message: 'User created'
    });
  });

module.exports = {
    courseRouter:courseRouter
}
