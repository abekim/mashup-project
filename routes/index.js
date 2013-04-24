/*
 * GET home page.
 */
var models = require('../models/models')
  , http = require('http');

exports.index = function(req, res){
  models.Loc.find().populate('_cat').exec(function (err, docs) {
    if (err)
      return console.log("error loading list of locations");
    res.render('index', { title: 'FourTube', locations: docs });
  });
};

exports.newLocation = function (req, res) {
  models.Category.find().exec(function (err, docs) {
    if (err)
      return console.log("error loading categories");
    res.render('newLocation', { title: 'Add New Location - FourTube', categories: docs });
  });
};

exports.create = function (req, res) {
  models.Category.find({ label: req.body.category }).exec(function (err, docs) {
    if (err)
      return console.log("error finding category with label: ", req.body.category);
    var value = req.body.name.toLowerCase().replace(/ /g, '+');

    var newLoc = new models.Loc({ name: req.body.name, _cat:docs[0]._id, address: req.body.address, value: value });

    newLoc.save(function (err, docs) {
      if (err)
        return console.log("error saving Location", err);
      console.log("Created a new Location");
    });
  });
};

exports.newCategory = function (req, res) {
  res.render('newCategory', { title: 'Add New Category - FourTube' });
};

exports.createCategory = function (req, res) {
  var newCat = new models.Category({ label: req.body.label });

  newCat.save(function (err, docs) {
    if (err)
      return console.log("error saving Category", err);
    console.log("created a new category");
  });
};

exports.checkin = function (req, res) {
  // console.log('checking in');
  models.Loc.findOne({ value: req.params.location }).populate('_cat').exec(function (err, doc) {
    if (err)
      return console.log("error checking in");
    console.log(doc);
    res.render('detail', { title: doc.name + ' - FourTube', loc:doc });
  });
};