const mongoose = require('./connection.js');
const custSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Custy = mongoose.model('Custy', custSchema);

module.exports = Custy;