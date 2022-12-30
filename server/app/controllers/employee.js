const User = require("../models/user.model");
const employees = require("../models/user.model");
const holidays = require("../models/holidays.model");
const Hr_Dashboard = require("../models/hr_dashboard.model");
const projects1 = require("../models/projects.model");
var bcrypt = require("bcryptjs");

/// Create Employee
const create = (req, res) => {
  const task = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    emp_id: req.body.emp_id,
    designation: req.body.designation,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    display_name: req.body.display_name,
    email: req.body.email,
    userType: req.body.userType,
    isActive: req.body.isActive,
    isDeleted: req.body.isDeleted,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
    addedBy: req.body.addedBy,
    updatedBy: req.body.updatedBy,
    gender: req.body.gender,
    personal_info: req.body.personal_info,
    emergency_info: req.body.emergency_info,
    bank_info: req.body.bank_info,
    family_info: req.body.family_info,
    professional_info: req.body.professional_info,
    educational_info: req.body.educational_info,
  });

  task.save((err, data) => {
    if (!err) {
      // res.send(data);
      res.status(200).json({
        code: 200,
        message: "Employee Added Successfully",
        addEmployee: data,
      });
    } else {
      console.log(err);
    }
  });
};

/// Create Employee
const createproject = (req, res) => {
  const task2 = new projects1({
    projects: req.body.projects,
  });

  task2.save((err, data) => {
    if (!err) {
      // res.send(data);
      res.status(200).json({
        code: 200,
        message: "Employee Added Successfully",
        addEmployee: data,
      });
    } else {
      console.log(err);
    }
  });
};

/// ADD Employee
const addemployee = (req, res) => {
  const task = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    emp_id: req.body.emp_id,
    designation: req.body.designation,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    display_name: req.body.display_name,
    email: req.body.email,
    userType: req.body.userType,
    isActive: req.body.isActive,
    isDeleted: req.body.isDeleted,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
    addedBy: req.body.addedBy,
    updatedBy: req.body.updatedBy,
    gender: req.body.gender,
    personal_info: req.body.personal_info,
    emergency_info: req.body.emergency_info,
    bank_info: req.body.bank_info,
    family_info: req.body.family_info,
    professional_info: req.body.professional_info,
    educational_info: req.body.educational_info,
  });

  task.save((err, data) => {
    if (!err) {
      // res.send(data);
      res.status(200).json({
        code: 200,
        message: "Employee Added Successfully",
        addEmployee: data,
      });
    } else {
      console.log(err);
    }
  });
};

/// Create Admin
const createHrDashboard = (req, res) => {
  const task1 = new Hr_Dashboard({
    projects: req.body.projects,
    clients: req.body.clients,
    tasks: req.body.tasks,
    employees: req.body.employees,
    totalIncome: req.body.totalIncome,
    totalOutcome: req.body.totalOutcome,
    totalSales: req.body.totalSales,
    totalRevenue: req.body.totalRevenue,
    newEmployees: req.body.newEmployees,
    overAllEmployees: req.body.overAllEmployees,
    earnings: req.body.earnings,
    previousEarnings: req.body.previousEarnings,
    expenses: req.body.expenses,
    previousExpenses: req.body.previousExpenses,
    profits: req.body.profits,
    previousProfits: req.body.previousProfits,
    statistics: req.body.statistics,
    task_Statistics: req.body.task_Statistics,
    total_absent: req.body.total_absent,
    client_details: req.body.client_details,
    recent_projects: req.body.recent_projects,
  });

  task1.save((err, data) => {
    if (!err) {
      // res.send(data);
      res.status(200).json({
        code: 200,
        message: "Admin Added Successfully",
        addEmployee: data,
      });
    } else {
      console.log(err);
    }
  });
};

//// To update Employee data
const updateHrDashboard = async (req, res) => {
  const taskUpdate = await Hr_Dashboard.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        projects: req.body.projects,
        clients: req.body.clients,
        tasks: req.body.tasks,
        employees: req.body.employees,
        totalIncome: req.body.totalIncome,
        totalOutcome: req.body.totalOutcome,
        totalSales: req.body.totalSales,
        totalRevenue: req.body.totalRevenue,
        newEmployees: req.body.newEmployees,
        overAllEmployees: req.body.overAllEmployees,
        earnings: req.body.earnings,
        previousEarnings: req.body.previousEarnings,
        expenses: req.body.expenses,
        previousExpenses: req.body.previousExpenses,
        profits: req.body.profits,
        previousProfits: req.body.previousProfits,
        statistics: req.body.statistics,
        task_Statistics: req.body.task_Statistics,
        invoices: req.body.invoices,
        payments: req.body.payments,
        clients_name: req.body.clients,
        projects_name: req.body.projects,
      },
    },
    { new: true }
  );

  taskUpdate.save((err, data) => {
    if (!err) {
      // res.send(data);
      res.status(200).json({
        code: 200,
        message: "Admin details updated Successfully",
        addEmployee: data,
      });
    } else {
      console.log(err);
    }
  });
};

///// To get Single Employee data
const get = (req, res) => {
  employees.find({ _id: req.params.id }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(results);
    }
  });
};

//// To update Employee data
const update = async (req, res) => {
  const taskUpdate = await employees.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        username: req.body.username,
        password: req.body.password,
        emp_id: req.body.emp_id,
        designation: req.body.designation,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        display_name: req.body.display_name,
        email: req.body.email,
        userType: req.body.userType,
        isActive: req.body.isActive,
        isDeleted: req.body.isDeleted,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        addedBy: req.body.addedBy,
        updatedBy: req.body.updatedBy,
        gender: req.body.gender,
        personal_info: req.body.personal_info,
        emergency: req.body.emergency,
        bank_details: req.body.bank_details,
        professional_info: req.body.professional_info,
        educational_details: req.body.educational_details,
      },
    },
    { new: true }
  );

  taskUpdate.save((err, data) => {
    if (!err) {
      // res.send(data);
      res.status(200).json({
        code: 200,
        message: "Employee details updated Successfully",
        addEmployee: data,
      });
    } else {
      console.log(err);
    }
  });
};

/////// To delete Employee
const delete_employee = async (req, res) => {
  const taskDelete = await employees.findByIdAndDelete({ _id: req.params.id });
  if (taskDelete) {
    res.status(200).json({ message: "Successfully deleted" });
  } else {
    res.status(500).json({ message: "Could not delete" });
  }
};

/////// To delete Employee
const delete_admin = async (req, res) => {
  const taskDelete = await HR.findByIdAndDelete({ _id: req.params.id });
  if (taskDelete) {
    res.status(200).json({ message: "Successfully deleted" });
  } else {
    res.status(500).json({ message: "Could not delete" });
  }
};

/////// To get all Employee
const getall = (req, res) => {
  employees.find({}, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res
        .status(200)
        .json({ message: "Fetched all Employees", alldata: results });
    }
  });
};

/// To display Dashboard details
const dashboard = (req, res) => {
  var today = new Date()
    .toLocaleDateString("en-us", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(",", "");
  employees.find({ _id: req.params.id }, (err, results) => {
    var dashboar = {
      status: 200,
      values: results.map(function (result) {
        var projectno = result.professional_info.projects_assigned.length;
        return {
          profile_image: result.image,
          employee_id: result.emp_id,
          name: result.display_name,
          fname: result.first_name,
          date: today,
          projects: projectno,
          projects_name: result.professional_info.projects_assigned,
          total_projects: projectno,
          completed_projects: result.professional_info.completed_projects,
          pending_projects: result.professional_info.pending_projects,
          remaining_leaves: result.professional_info.remaining_leaves,
          approved_allowance: result.professional_info.approved_allowance,
          remaining_allowance: result.professional_info.remaining_allowance,
          taken_leaves: result.professional_info.taken_leaves,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(dashboar);
    }
  });
};

////To displays bdays

const birthday = (req, res) => {
  var today_new = new Date();
  employees.find({}, (err, results) => {
    var dashboar = {
      status: 200,
      values: results.map(function (result) {
        var u = employees.length;
        var bday = "";
        var test = "";
        var img = "";
        function bd(...employees) {
          for (let i = 0; i < 1; i++) {
            if (
              today_new.getUTCDate() == result.personal_info.dob.getUTCDate() &&
              today_new.getUTCMonth() == result.personal_info.dob.getUTCMonth()
            ) {
              bday = result.display_name;
            }

            return bday;
          }
        }

        function bd1(...employees) {
          for (let i = 0; i < 1; i++) {
            if (
              today_new.getUTCDate() == result.personal_info.dob.getUTCDate() &&
              today_new.getUTCMonth() == result.personal_info.dob.getUTCMonth()
            ) {
              img = result.image;
            }

            return img;
          }
        }

        console.log(bd(employees));
        test = bd(employees);
        test1 = bd1(img);

        return {
          test,
          test1,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(dashboar);
    }
  });
};

//// To display upcoming holidays

const holidays_test = (req, res) => {
  var today = new Date();
  holidays.find({}, (err, results) => {
    var dashboar = {
      status: 200,
      values: results.map(function (result) {
        var total_holidays = result.holidays.length;
        var festival = "";
        var fest_day = "";
        var fest_date = "";

        for (let i = 0; i < total_holidays; i++) {
          if (today.getTime() === result.holidays[i].date.getTime()) {
            festival = result.holidays[i].name;
            fest_day = result.holidays[i].day;
            fest_date = result.holidays[i].date;
            break;
          } else if (today.getTime() <= result.holidays[i].date.getTime()) {
            festival = result.holidays[i].name;
            fest_day = result.holidays[i].day;
            fest_date = result.holidays[i].date;
            break;
          } else {
            continue;
          }
        }

        fest_date = fest_date
          .toJSON()
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-");

        return {
          festival,
          fest_day,
          fest_date,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(dashboar);
    }
  });
};

//// To display profile details
const profiledetail = (req, res) => {
  var today = new Date()
    .toLocaleDateString("en-us", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(",", "");
  employees.find({ _id: req.params.id }, (err, results) => {
    var profiles = {
      status: 200,
      values: results.map(function (result) {
        var projectno = result.professional_info.projects_assigned.length;
        return {
          profile_image: result.image,
          role: result.role,
          designation: result.designation,
          name: result.display_name,
          emp_id: result.emp_id,
          email: result.email,
          dob: result.dob,
          gender: result.gender,
          personal_info: result.personal_info,
          emergency_info: result.emergency_info,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(profiles);
    }
  });
};

//// Search Operation using Employee id with auto search
const search = async (req, resp) => {
  var key = req.params.key;
  let data = await employees.find({
    $or: [{ role: { $regex: key } }],
  });
  resp.send(data);
};

//// To display profile details
const generalDetail = (req, res) => {
  employees.findOne({ _id: req.params.id }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        profile_image: results.image,
        name: results.display_name,
        role: results.role,
        designation: results.designation,
        emp_id: results.emp_id,
        doj: results.professional_info.doj,
        phone_no: results.personal_info.phone_no,
        email: results.email,
        dob: results.personal_info.dob,
        address: results.personal_info.address,
        gender: results.gender,
        reports_to: results.professional_info.reporting_manager,
      });
    }
  });
};

// To display personal information
const personalDetail = (req, res) => {
  employees.findOne({ _id: req.params.id }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        passport: results.personal_info.passport,
        passport_exp_date: results.personal_info.passport_exp_date,
        telephone_no: results.personal_info.phone_no,
        nationality: results.personal_info.nationality,
        religion: results.personal_info.religion,
        marital_status: results.personal_info.marital_status,
        emp_spouse: results.personal_info.employment_of_spouse,
        childs: results.personal_info.childrens,
      });
    }
  });
};

// To display Emergency Contacts

const emergencyDetail = (req, res) => {
  employees.find({ _id: req.params.id }, (err, results) => {
    var profiles = {
      status: 200,
      values: results.map(function (result) {
        var emergency_length = result.emergency_info.length;
        const ename = [];
        var erelation = [];

        var econtact_no = [];

        for (var i = 0; i < emergency_length; i++) {
          ename[i] = result.emergency_info[i].name;
          erelation[i] = result.emergency_info[i].relation;
          //Dob[i] = result.family_info[i].dob;
          econtact_no[i] = result.emergency_info[i].contact_no;
        }
        return {
          ename,
          erelation,

          econtact_no,
        };
      }),
    };
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(profiles);
    }
  });
};

//Bank details
const bankDetail = (req, res) => {
  employees.findOne({ _id: req.params.id }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        bank_name: results.bank_info.bank_name,
        bank_acc_no: results.bank_info.bank_acc_no,
        ifsc_code: results.bank_info.ifsc_code,
        pan_no: results.bank_info.pan_no,
      });
    }
  });
};

// education details
const educationDetail = (req, res) => {
  employees.find({ _id: req.params.id }, (err, results) => {
    var profiles = {
      status: 200,
      values: results.map(function (result) {
        var educational_detail_length = result.educational_info.length;
        var Institution_name = [];
        var Degree = [];
        var Degree_start_year = [];
        var Degree_end_year = [];

        for (let i = 0; i < educational_detail_length; i++) {
          Institution_name[i] = result.educational_info[i].institute_name;
          Degree[i] = result.educational_info[i].degree;
          Degree_start_year[i] = result.educational_info[i].start_year;
          Degree_end_year[i] = result.educational_info[i].end_year;
        }
        return {
          Institution_name,
          Degree,
          Degree_start_year,
          Degree_end_year,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(profiles);
    }
  });
};

// family info
const familyDetail = (req, res) => {
  employees.find({ _id: req.params.id }, (err, results) => {
    var profiles = {
      status: 200,
      values: results.map(function (result) {
        var family_length = result.family_info.length;
        const name = [];
        var relation = [];
        var Dob = [];
        var Phonenum = [];

        for (var i = 0; i < family_length; i++) {
          name[i] = result.family_info[i].name;
          relation[i] = result.family_info[i].relation;
          Dob[i] = result.family_info[i].dob;
          Phonenum[i] = result.family_info[i].phone_no;
        }
        return {
          name,
          relation,
          Dob,
          Phonenum,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(profiles);
    }
  });
};

// professional info
const professionalInfo = (req, res) => {
  employees.find({ _id: req.params.id }, (err, results) => {
    var profiles = {
      status: 200,
      values: results.map(function (result) {
        var professional_info = result.professional_info.experience;

        // var professional_experiences=[];
        //  for (i=0;i<2;i++){
        //    professional_experiences[i]=result.professional_info.experience[i+1]
        //      }
        return {
          //professional_experiences,
          professional_info,
          //result.professional_info.experience[1]
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(profiles);
      //   {
      //   professional_experience: results.professional_info.experience[1],
      //   professional_experience2: results.professional_info.experience[2],
      // });
    }
  });
};

//To Display Total Revenue Chart Data
const totalRevenueData = (req, res) => {
  Hr_Dashboard.findOne((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        totalIncomeData: results.totalIncome.data,
        totalOutcomeData: results.totalOutcome.data,
        labels: results.totalIncome.labels,
      });
    }
  });
};

//To Display Sales OverView Chart Data
const salesOverviewData = (req, res) => {
  Hr_Dashboard.findOne((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        totalSalesData: results.totalSales.data,
        totalRevenueData: results.totalRevenue.data,
        labels: results.totalSales.labels,
      });
    }
  });
};

//To Display Statistics Card Data
const statisticsData = (req, res) => {
  Hr_Dashboard.findOne((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        today_leave: results.statistics.today_Leave,
        pending_invoice: results.statistics.pending_Invoice,
        completed_projects: results.statistics.completed_Projects,
        open_tickets: results.statistics.open_Tickets,
        closed_tickets: results.statistics.closed_Tickets,
      });
    }
  });
};

//To Display Total absents
const absentDetails = (req, res) => {
  Hr_Dashboard.findOne((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        absent_details: results.total_absent,
      });
    }
  });
};

//To Display Client Details
//const clientDetails = (req, res) => {
//  Hr_Dashboard.find((err, results) => {
//    var clients = {
//      status: 200,
//      values: results.map(function (result) {
//        var client_name = [];
//        var client_post = [];
//        var client_email = [];
//        var client_status = [];
//
//        for (var i = 0; i < 5; i++) {
//          client_name[i] = result.client_details[i].client_name;
//          client_post[i] = result.client_details[i].client_post;
//          client_email[i] = result.client_details[i].client_email;
//          client_status[i] = result.client_details[i].client_status;
//        }
//        return {
//          client_name,
//          client_post,
//          client_email,
//          client_status
//        };
//      }),
//    };
//
//    if (err) {
//      console.log(err);
//      res.status(500).json({ message: err });
//    } else {
//      res.status(200).json(clients);
//    }
//  });
//};

//to display the admin data (projects,Clients , tasks and employees)
const admin_data_card1 = (req, res) => {
  Hr_Dashboard.find({}, (err, results) => {
    var admin_da = {
      status: 200,
      values: results.map(function (result) {
        //var projectno = result.professional_info.projects_assigned.length;
        return {
          projects: result.projects,
          clients: result.clients,
          tasks: result.tasks,
          employees: result.employees,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(admin_da);
    }
  });
};

//to display admin data (task statistics)
const admin_data_taskstat = (req, res) => {
  Hr_Dashboard.find({}, (err, results) => {
    var admin_da = {
      status: 200,
      values: results.map(function (result) {
        total_tasks =
          result.task_Statistics.completed_Tasks +
          result.task_Statistics.inprogress_Tasks +
          result.task_Statistics.onHold_Tasks +
          result.task_Statistics.pending_Tasks +
          result.task_Statistics.review_Tasks;

        return {
          overdue_Tasks: result.task_Statistics.overdue_Tasks,
          completed_Tasks: result.task_Statistics.completed_Tasks,
          inprogress_Tasks: result.task_Statistics.inprogress_Tasks,
          onHold_Tasks: result.task_Statistics.onHold_Tasks,
          pending_Tasks: result.task_Statistics.pending_Tasks,
          review_Tasks: result.task_Statistics.review_Tasks,
          total_tasks,
          //total,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(admin_da);
    }
  });
};

//to display the admin data (new employees, earning, expenses, profit)
const admin_data_card3 = (req, res) => {
  Hr_Dashboard.find({}, (err, results) => {
    var admin_da = {
      status: 200,
      values: results.map(function (result) {
        return {
          newEmployees: result.newEmployees,
          overAllEmployees: result.overAllEmployees,
          earnings: result.earnings,
          previousEarnings: result.previousEarnings,
          expenses: result.expenses,
          previousExpenses: result.previousExpenses,
          profits: result.profits,
          previousProfits: result.previousProfits,
        };
      }),
    };

    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json(admin_da);
    }
  });
};

//to display admin data (recent project)
const admin_data_recentproj = (req, res) => {
  Hr_Dashboard.findOne((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        recent_projects: results.recent_projects,
      });
    }
  });
};

//To Display Clients Data

const clientDetails = (req, res) => {
  Hr_Dashboard.findOne((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({
        client_details: results.client_details,
      });
    }
  });
};

module.exports = {
  create,
  get,
  update,
  delete_employee,
  getall,
  dashboard,
  search,
  profiledetail,
  generalDetail,
  personalDetail,
  emergencyDetail,
  familyDetail,
  educationDetail,
  bankDetail,
  professionalInfo,
  holidays_test,
  birthday,
  createHrDashboard,
  updateHrDashboard,
  delete_admin,
  totalRevenueData,
  salesOverviewData,
  absentDetails,
  statisticsData,
  clientDetails,
  admin_data_card1,
  admin_data_card3,
  admin_data_taskstat,
  admin_data_recentproj,
  addemployee,
  createproject,
};
