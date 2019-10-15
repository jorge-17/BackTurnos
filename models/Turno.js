var mongoose = require('mongoose');
var TurnoSchema = new mongoose.Schema({
    NoTurno: String,
    FechaRegistro: { type: Date, default: Date.now },
    Modulo: String
});
module.exports = mongoose.model('turnos', TurnoSchema);
