import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EmpDashboardHeaderComponent } from './components/employee-dashboard/emp-dashboard-header/emp-dashboard-header.component';
import { EmpDashboardBodyComponent } from './components/employee-dashboard/emp-dashboard-body/emp-dashboard-body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpDashboardComponent } from './components/employee-dashboard/emp-dashboard/emp-dashboard.component';
import { FormsModule } from '@angular/forms';
import { AllemployeesComponent } from './components/employees/allemployees/allemployees.component';
import { AddformComponent } from './components/employees/addform/addform.component';
import { EditformComponent } from './components/employees/editform/editform.component';
import { DeleteComponent } from './components/employees/delete/delete.component';
//import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectComponent } from './components/project/project.component';
import { CreateformComponent } from './components/project/createform/createform.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
} from 'ngx-ui-loader';
import { RegisterComponent } from './components/registeration/register/register.component';
import { RegistercompleteComponent } from './components/registeration/registercomplete/registercomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './components/_services/auth.service';
import { AddSuccessComponent } from './components/employees/add-success/add-success.component';

const ngxConfig: NgxUiLoaderConfig = {
  fgsColor: '#daae51',
  pbColor: '#daae51',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpDashboardHeaderComponent,
    EmpDashboardBodyComponent,
    SidenavComponent,
    ProfileComponent,
    EmpDashboardComponent,
    LoginComponent,
    EmpDashboardComponent,
    AllemployeesComponent,
    AddformComponent,
    EditformComponent,
    DeleteComponent,
    ProjectComponent,
    CreateformComponent,
    AdminDashboardComponent,
    RegisterComponent,
    RegistercompleteComponent,

    AddSuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule,
    NgChartsModule,
    NgxPaginationModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    NgxUiLoaderModule.forRoot(ngxConfig),
    ReactiveFormsModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
