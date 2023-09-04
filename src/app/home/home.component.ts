import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Employee_image:String = "../../assets/Employee-image.png";
  constructor() { }

  ngOnInit(): void {
  }

}
