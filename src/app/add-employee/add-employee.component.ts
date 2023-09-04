import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employes:any = [];
  loginForm: FormGroup;
  constructor(private employesServics:EmployeesService, private router: Router) {}

  ngOnInit(): void {
    this.employes = this.employesServics.getEmployeesS()
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required , Validators.email]),
      id: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
      department: new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    });
}
onSubmit(){
  console.log(this.loginForm.value); //just for the test
  this.employesServics.addEmploye(this.loginForm.value);
  this.router.navigateByUrl('EmployeesTable');
  }
}