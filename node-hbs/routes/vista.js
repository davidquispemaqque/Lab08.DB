var express = require('express');
var router = express.Router();
var equipo = require('../controllers/EquipoController.js');

router.get('/', equipo.list);
router.get('/show/:id', equipo.show);
router.get('/create', equipo.create);
router.post('/save', equipo.save);
router.get('/edit/:id', equipo.edit);
router.post('/update/:id', equipo.update);
router.post('/delete/:id', equipo.delete);

module.exports = router;