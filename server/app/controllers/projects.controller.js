const projects = require("../models/projects.model");
const project_set = require("../models/projects.model");

///Creating a new project

const create = (req, res) => {
  const project = new projects({
    project_title: req.body.project_title,
    open_tasks: req.body.open_tasks,
    completed_tasks: req.body.completed_tasks,
    project_description: req.body.project_description,
    deadline: req.body.deadline,
    project_leader: req.body.project_leader,
    team_members: req.body.team_members,
    progress: req.body.progress,
    // project_Role: req.body.project_role,
  });
  project.save((err, data) => {
    if (!err) {
      // res.send(data);
      res.status(200).json({
        code: 200,
        message: "Projects Added Successfully",
        addProject: data,
      });
    } else {
      console.log(err);
    }
  });
};

///// To get Single Project data
const get = (req, res) => {
  project_set.find({ _id: req.params.id }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(results);
    }
  });
};

//// Search Operation using role with auto search
const search = async (req, resp) => {
  var key = req.params.key;
  let data = await employees.find({
    $or: [{ role: { $regex: key } }],
  });
  resp.send(data);
};

/////// To get all Projects
const getall = (req, res) => {
  project_set.find({}, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res
        .status(200)
        .json({ message: "Fetched all Projects", alldata: results });
    }
  });
};

module.exports = {
  create,
  get,
  getall,
};
