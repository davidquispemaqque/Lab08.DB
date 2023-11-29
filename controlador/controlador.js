var mongoose = require('mongoose');
var Equipo = require("../models/Equipo");

var equipoController = {};

equipoController.list = function(req, res) {
    Equipo.find({}).exec(function(err, equipos) {
        if(err) { console.log('Error:', err); return; }
        res.render('../views/equipo/index', {equipos: equipos});
    });
};

equipoController.show = function(req, res) {
    Equipo.findOne({_id: req.params.id}).exec(function(err, equipo) {
        if(err) { console.log('Error:', err); return; }
        res.render('../views/equipo/show', {equipo: equipo});
    });
};

equipoController.create = function(req, res) {
    res.render('../views/equipo/create');
};

equipoController.save = function(req, res) {
    var equipo = new Equipo(req.body);
    
    equipo.save(function(err) {
        if(err) { console.log('Error:', err); return; }
        res.redirect("/equipos/show/"+equipo._id);
    });
};

equipoController.edit = function(req, res) {
  Equipo.findOne({_id: req.params.id}).exec(function (err, equipo) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/equipo/edit", {equipo: equipo});
    
  });
};

equipoController.update = function(req, res){
    Equipo.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        miembros: req.body.miembros
    }}, { new: true },
    function( err, equipo){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/equipo/edit', {equipo: req.body} );
        }
        
        console.log( equipo );
        
        res.redirect('/equipos/show/' + equipo._id);
        
    });
};

equipoController.delete = function(req, res){
    
    Equipo.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Equipo deleted!");
        res.redirect("/equipos");
    });
    
};

module.exports = equipoController;
