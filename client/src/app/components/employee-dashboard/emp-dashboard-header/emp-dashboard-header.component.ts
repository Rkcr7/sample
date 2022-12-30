import { Component } from '@angular/core';
import { DashHeaderService } from 'src/app/servies/dash-header.service';
@Component({
  selector: 'app-dash-header',
  templateUrl: './emp-dashboard-header.component.html',
  styleUrls: ['./emp-dashboard-header.component.css']
})
export class EmpDashboardHeaderComponent {
  title = 'HRMS-Dashboard';
  users:any;
  constructor(private dashHeader:DashHeaderService)
  {
    dashHeader.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });

  }
}
