import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
  employes:any =[]
  constructor(private employesServics:EmployeesService) { }

  ngOnInit(): void {
    this.employes = this.employesServics.getEmployeesS()
  }
}