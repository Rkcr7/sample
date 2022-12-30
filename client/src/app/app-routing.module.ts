import { IsadminGuard } from "./components/_services/isadmin.guard"
import { AuthGuard } from './components/_services/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './components/employee-dashboard/emp-dashboard/emp-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AllemployeesComponent } from './components/employees/allemployees/allemployees.component';
import { ProjectComponent } from "./components/project/project.component";
import { CreateformComponent } from './components/project/createform/createform.component';
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { RegisterComponent } from "./components/registeration/register/register.component";


const routes: Routes = [
  { path: 'emp-dashboard',canActivate:[AuthGuard], component:  EmpDashboardComponent},
  { path: 'emp-profile', canActivate:[AuthGuard],component:  ProfileComponent},
  { path: 'admin-dashboard',canActivate:[AuthGuard,IsadminGuard], component:  AdminDashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'employees-allemployees',canActivate:[AuthGuard],canActivateChild:[IsadminGuard], component:  AllemployeesComponent},
  { path: 'projects', canActivate:[AuthGuard],component:  ProjectComponent},
  { path: 'project-createform', canActivate:[AuthGuard],component:  CreateformComponent},
  {path: 'register',component:  RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
