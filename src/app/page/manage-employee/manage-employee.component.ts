import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-employee',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.css'
})
export class ManageEmployeeComponent {

  public employeeObj = {
    firstName : "",
    lastName : "",
    email : "",
    departmentId : "",
    roleId : ""
  }

  constructor(private http: HttpClient){}

  addEmployee(){

    Swal.fire({
      title: "Would you like to add this?",
      // text: "You won't be able to revert this!",
      icon: "info",
      // showCancelButton: true,
      confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.post("http://localhost:8080/employee/add", this.employeeObj).subscribe(
          (data) => {
            Swal.fire({
              title: "Good job!",
              text: "Registered!",
              icon: "success"
            });
          }
        )
      }
    });
  }
}
