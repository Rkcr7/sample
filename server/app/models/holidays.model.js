const mongoose = require("mongoose");

var holidays =mongoose.Schema({
  holidays:[{
    date:{type:Date},
    day:{type:String},
    name:{type:String}
}]
});



//module.exports = Role;
module.exports = mongoose.model('holidays', holidays);