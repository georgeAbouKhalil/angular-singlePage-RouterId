import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'home'},
  {path: 'home', component:HomeComponent},
  {path: 'EmployeesTable/:id', component:EmployeeDetailsComponent},
  {path: 'EmployeesTable', component:EmployeesTableComponent},
  {path: 'addEmployees', component:AddEmployeeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

