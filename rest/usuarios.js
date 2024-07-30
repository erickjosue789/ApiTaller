var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Usuario = require('../models').usuario;
const Perfil = require('../models').perfil;

//GET-All 
router.get('/findAll/json', function (req, res, next) {
    Usuario.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
        include: [{
            model: Perfil,
            as: 'perfil',
            attributes: ['descripcion', 'estado']
        }],
    })
        .then(usuarios => { res.json(usuarios); })
        .catch(error => res.status(400).send(error))
});

//GET-id
router.get('/findById/:id/json', function (req, res, next) {
    let id = parseInt(req.params.id);
    Usuario.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
        include: [{
            model: Perfil,
            as: 'perfil',
            attributes: ['descripcion', 'estado']
        }],
        where: {
            [Op.and]: [
                { id: id }
            ]
        }
    })
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(error => res.status(400).send(error))
});

//POST
router.post('/save', function (req, res, next) {
    let { nombre, apellido, id_perfil } = req.body;
    Usuario.create({
        nombre: nombre,
        apellido: apellido,
        id_perfil: parseInt(id_perfil),
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(usuario => {
            res.json(usuario);
        })
        .catch(error => res.status(400).send(error))
});

//PUT
router.put('/update', function (req, res, next) {
    let { id, nombre, apellido, id_perfil } = req.body;
    Usuario.update({
        nombre: nombre,
        apellido: apellido,
        id_perfil: parseInt(id_perfil),
        updatedAt: new Date()
    },
        {
            where: {
                id: parseInt(id)
            }
        })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(error => res.status(400).send(error))
});

//DELETE
router.delete('/delete/:id', function (req, res, next) {
    let id = parseInt(req.params.id);
    Usuario.destroy({
        where: {
            id: id
        }
    })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(error => res.status(400).send(error))
});

module.exports = router;