const mongoose = require("mongoose");
var Projects = new mongoose.Schema({

  projects:[ {
     project_title: { type: String },
  open_tasks: { type: Number },
  completed_tasks: { type: Number },
  project_description: { type: String },
  deadline: { type: Date },
  project_leader: { type: String },
  team_members: { type: String },
  progress: { type: String },
    deadline:{type:String}
}]

  // project_Role: { type: Array },
});
Projects.pre("save", function (next) {
  for (var i=0; i<this.projects.length; i++){
  var ot = this.projects[i].open_tasks;
  var ct = this.projects[i].completed_tasks;
  var progress1= (ct/(ot+ct))*100;
 this.projects[i].progress = Math.round(progress1).toString();}
  next();
});

module.exports = mongoose.model("Projects", Projects);
