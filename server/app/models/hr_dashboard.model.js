const mongoose = require("mongoose");
var hr_dashboard = new mongoose.Schema({

  projects: { type: Number },
  clients: { type: Number },
  tasks: { type: Number },
  employees: { type: Number },
  totalIncome: {
    data: { type: Array },
    labels: { type: Array },
  },
  totalOutcome: {
    data: { type: Array },
    labels: { type: Array },
  },
  totalSales: {
    data: { type: Array },
    labels: { type: Array },
  },
  totalRevenue: {
    data: { type: Array },
    labels: { type: Array },
  },
  newEmployees: { type: Number },
  overAllEmployees: {type: Number },

  earnings: { type: Number },
  previousEarnings: { type: Number },

  expenses: { type: Number },
  previousExpenses: { type: Number },

  profits: { type: Number },
  previousProfits: { type: Number },

  statistics: {
    today_Leave: { type: Array },
    pending_Invoice: { type: Array },
    completed_Projects: { type: Array },
    open_Tickets: { type: Array },
    closed_Tickets: { type: Array },
  },
  task_Statistics: {
    overdue_Tasks: {type: Number},
    completed_Tasks: { type: Number },
    inprogress_Tasks: { type:Number  },
    onHold_Tasks: { type: Number },
    pending_Tasks: { type: Number },
    review_Tasks: { type: Number },
  },

  total_absent: [
    {
      absent_name: {type: String},
      absent_date: {type: String}
    }
  ],

  client_details: [
    {
      client_name: {type: String},
      client_post: {type: String},
      client_email: {type: String},
      client_status: {type: Boolean} 
    }
  ],
  recent_projects:[
    {
      project_name: {type: String},
      open_task: {type: Number},
      completed_task: {type: Number},
      progress: {type: Number}
    }
  ]
});

const Hr_Dashboard = mongoose.model("Hr_Dashboard", hr_dashboard);
module.exports = Hr_Dashboard;
