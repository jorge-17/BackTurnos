var mongoose = require('mongoose');
var ModuloSchema = new mongoose.Schema({
    nombre: String,
    value: String
});
module.exports = mongoose.model('modulos', ModuloSchema);