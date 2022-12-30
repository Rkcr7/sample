const mongoose = require("mongoose");
const Role = require("../models/role.model");

var User = new mongoose.Schema({
  emp_id: { type: String },

  role: { type: String, default: " " },

  designation: { type: String },

  image: { data: Buffer, type: String },

  first_name: { type: String },

  last_name: { type: String },

  display_name: { type: String },

  email: { type: String },

  userType: { type: Number },

  isActive: { type: Boolean, default: true },

  isDeleted: { type: Boolean, default: false },

  createdAt: { type: String },

  updatedAt: { type: String },

  addedBy: { type: String },

  updatedBy: { type: String },

  gender: { type: String },

  personal_info: {
    dob: { type: Date, default: "2000-01-01" },
    adhaar: { type: String },
    pan_no: { type: String },
    passport: { type: String },
    passport_exp_date: { type: String },
    address: { type: String },
    phone_no: { type: String },
    telephone_no: { type: String },
    nationality: { type: String },
    religion: { type: String },
    marital_status: { type: String },
    employment_of_spouse: { type: String },
    childrens: { type: String },
  },

  emergency_info: [
    {
      name: { type: String },
      relation: { type: String },
      contact_no: { type: String },
    },
  ],

  bank_info: {
    bank_name: { type: String },
    bank_acc_no: { type: String },
    ifsc_code: { type: String },
    pan_no: { type: String },
  },

  family_info: [
    {
      name: { type: String },
      relation: { type: String },
      dob: { type: String },
      phone_no: { type: String },
    },
  ],

  educational_info: [
    {
      institute_name: { type: String },
      degree: { type: String },
      start_year: { type: String },
      end_year: { type: String },
    },
  ],

  professional_info: {
    experience: { type: Object },
    skills: { type: Array },
    clients: { type: Array },
    completed_projects: { type: Number },
    pending_projects: { type: Number },
    remaining_leaves: { type: Number },
    taken_leaves: { type: Number },
    approved_allowance: { type: Number },
    remaining_allowance: { type: Number },
    projects_assigned: { type: Array },
    reporting_manager: { type: String },
    doj: { type: String },
  },

  username: { type: String },
  password: { type: String },

  roles: [
    {
      type: String,
      //type1: mongoose.Schema.Types.ObjectId,
    },
  ],
});

User.pre("save", function (next) {
  var gen = this.gender;
  var rolesadmin = ["tsm", "associate tsm"];
  var roleshr = ["hr", "hr director", "recruiter", "hr coordinator"];
  var designations = this.designation;
  if (rolesadmin.includes(designations.toLowerCase())) {
    this.role = "Admin";
    this.roles = ["ROLE_ADMIN", "ROLE_EMPLOYEE"];
  } else if (roleshr.includes(designations.toLowerCase())) {
    this.role = "HR";
    this.roles = ["ROLE_HR", "ROLE_EMPLOYEE"];
  } else {
    this.role = "Employee";
    this.roles = ["ROLE_EMPLOYEE"];
  }
  if (gen.toLowerCase() == "male") {
    this.image = "http://localhost:8080/profile/male.png";
  } else {
    this.image = "http://localhost:8080/profile/female.png";
  }
  next();
});

module.exports = mongoose.model("User", User);
