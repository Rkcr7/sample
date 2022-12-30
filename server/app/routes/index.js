const express = require("express");
const tasksController = require("../controllers/employee");
const projectController = require("../controllers/projects.controller");
const { verifySignUp } = require("../middlewares");

// Router initialisation
const router = express.Router();

//Read all the data
router.get("/getall", tasksController.getall);

// Create (Employee) POST
router.post(
  "/create",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  tasksController.create
);
// Add (Employee) POST
router.post(
  "/add-employee",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  tasksController.addemployee
);

// Create (Admin) POST
router.post("/createHrDashboard", tasksController.createHrDashboard);

// Read (Employee) GET
router.get("/get/:id", tasksController.get);

// Create (Project) POST
router.post("/createproject", projectController.create);

// Update (Employee) PATCH
router.patch("/update/:id", tasksController.update);

// Update (Admin) PATCH
router.patch("/updateHrDashboard/:id", tasksController.updateHrDashboard);

// Read (Project) GET
router.get("/get", projectController.get);

//Read all the Project Data
router.get("/getallproject", projectController.getall);

// Delete (Employee) DELETE
router.delete("/delete/:id", tasksController.delete_employee);

// Delete (Admin) DELETE
router.delete("/deleteadmin/:id", tasksController.delete_admin);

// Dashboard details
router.get("/dashboard/:id", tasksController.dashboard);

// To Search for Project Details
router.get("/search/:key", tasksController.search);

// To get profile details of Employee
router.get("/profiledetail/:id", tasksController.profiledetail);

// To get general details of Employee
router.get("/general_detail/:id", tasksController.generalDetail);

// personal details
router.get("/personal_detail/:id", tasksController.personalDetail);

// To get Emergency details Employee
router.get("/emergency_detail/:id", tasksController.emergencyDetail);

//to get bank details
router.get("/bank_detail/:id", tasksController.bankDetail);

// to get education details
router.get("/education_detail/:id", tasksController.educationDetail);

// to get family information
router.get("/family_detail/:id", tasksController.familyDetail);

// to get professional information
router.get("/professional_detail/:id", tasksController.professionalInfo);

//to get holidays
router.get("/holidays", tasksController.holidays_test);

//to get birthdyas
router.get("/birthdays", tasksController.birthday);

//To Display Total Revenue Chart Data
router.get("/total_revenue", tasksController.totalRevenueData);

//To Display Sales OverView Chart Data
router.get("/sales_overview", tasksController.salesOverviewData);

//To Display Total absents
router.get("/absent_details", tasksController.absentDetails);

//To Display statistics card Data
router.get("/statistics_data", tasksController.statisticsData);

//To Display Clients Details  Data
router.get("/clients_data", tasksController.clientDetails);

//to get admin data
router.get("/admindatacard1", tasksController.admin_data_card1);
//to get admin data
router.get("/admindatacard3", tasksController.admin_data_card3);
//to get admin data
router.get("/admindatataskstat", tasksController.admin_data_taskstat);

//to get admin data
router.get("/admindatarecentproj", tasksController.admin_data_recentproj);

module.exports = router;
