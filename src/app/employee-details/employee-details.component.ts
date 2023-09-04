import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  emloyeeID:any;
  employes:any;
  currentEmployee:any;
  
  constructor(private actRoute: ActivatedRoute,private employesServics:EmployeesService) {
    this.emloyeeID = this.actRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.employes = this.employesServics.getEmployeesS()
    this.searchEmployee();
  }
  searchEmployee(){
    for(let employe of this.employes){
      if(employe.id == this.emloyeeID){
        this.currentEmployee = employe;
      }
    }
  }

}
