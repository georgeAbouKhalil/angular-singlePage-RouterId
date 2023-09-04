import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  getEmployeesS(){
    return this.arrEmployees;
  }
  arrEmployees: any = [
      new Employee("Ram", "Ram@gmail.com", 1,"HR", 9900),
      new Employee("Bob", "Bob@gmail.com", 2,"Bussiness", 12520),
      new Employee("Shyam", "Shyam@gmail.com", 3,"HR", 8500),
      new Employee("Jai", "Jai@gmail.com", 4,"Managers", 20400),
      new Employee("Alice", "Alice@gmail.com", 5,"Cyber", 18000),
      new Employee("Eve", "Eve@gmail.com", 6,"Admin", 30500),
      new Employee("George", "George@gmail.com", 7,"software", 757575),
];
  addEmploye(form){
    let e = new Employee(form.name, form.email, form.id, form.department, form.salary);
    this.arrEmployees.push(e);
  }
}
export class Employee{
  id:Number;
  name:String;
  department:string;
  email:string;
  salary:number;

  constructor(name:string,email: string, id:Number,department:string,salary:number ) { 
    this.name = name;
    this.email = email;
    this.id = id;
    this.department = department;
    this.salary = salary;
  }
 
}