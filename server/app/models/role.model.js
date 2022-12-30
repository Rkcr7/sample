const mongoose = require("mongoose");


var Role =mongoose.Schema({
  name:{type:String}
});

//module.exports = Role;
module.exports = mongoose.model('Role', Role);
