const mongoose = require('mongoose');
const Schema = mongoose.Schema;

trainSchema = new Schema({
    name: String,
    type: String,
    dateStart: {type: Date, default: Date.now()},
    dateEnd: {type: Date, default: Date.now()},
    cities: {type: Array, default: []},
});

Train = mongoose.model('Trains', trainSchema);

module.exports = Train;