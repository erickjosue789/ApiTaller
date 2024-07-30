var express = require('express');
var router = express.Router();

const {Sequelize, Op} = require('sequelize');
const Usuario = require('../models').usuario;
const Perfil = require('../models').perfil;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
