var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/fourtube');

var locSchema = mongoose.Schema({
  name: String,
  address: String
});

var Loc = mongoose.model('Loc', locSchema);

exports.Loc = Loc;