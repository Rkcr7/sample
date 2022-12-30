
import { Component } from '@angular/core';
import { DashHeaderService } from 'src/app/servies/dash-header.service';
@Component({
  selector: 'app-body',
  templateUrl: './emp-dashboard-body.component.html',
  styleUrls: ['./emp-dashboard-body.component.css']
})
export class EmpDashboardBodyComponent {
  title = 'HRMS-Dashboard';
  users:any;
  off:any;
  birth:any;
  constructor(private dashHeader:DashHeaderService)
  {
    dashHeader.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });

    dashHeader.off().subscribe((data)=>{
      console.warn("data",data);
      this.off=data
    });

    dashHeader.birth().subscribe((data)=>{
      console.warn("data",data);
      this.birth=data
    });

  }
}
