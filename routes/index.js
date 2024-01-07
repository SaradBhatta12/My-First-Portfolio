var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact',(req,res)=>{
  res.render('contact')
});

router.get('/aboutme',(req,res)=>{
  res.render('aboutme')
})

router.get('/projects',(req,res)=>{
  res.render('NotFound')
})

module.exports = router;
