var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/fourtube');

//location model
var locSchema = mongoose.Schema({
  name: String,
  _cat: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  address: String,
  value: String
});

var Loc = mongoose.model('Loc', locSchema);

//category model
var categorySchema = mongoose.Schema({
  label: String
});

var Category = mongoose.model('Category', categorySchema);

//export modules
exports.Loc = Loc;
exports.Category = Category;