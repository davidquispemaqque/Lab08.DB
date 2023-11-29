var Equipo = require('./models/Equipo');

var nuevoEquipo = new Equipo({
    nombre: 'Virtupro',
    integrantes: 5,
    email: 'jfarfan@abc.com',
    estado: 'A',
    created_at: new Date('01/23/2020')
});

nuevoEquipo.save(function (err) {
    if (err) throw err;
    console.log('Equipo creado exitosamente');
});
