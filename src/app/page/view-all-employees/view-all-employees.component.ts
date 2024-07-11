import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-employees',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.css'
})
export class ViewAllEmployeesComponent {

  public employeeList: any;

  constructor(private http: HttpClient){
    this.loadAllEmployeesToTheList();
  }

  loadAllEmployeesToTheList(){
   this.http.get("http://localhost:8080/employee/get-all").subscribe(response =>{
    this.employeeList = response;  
    console.log(response);
   })
  }
  deleteEmployee(employee: any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8080/employee/delete-emp/${employee.id}`,{responseType:"text"}).subscribe(response =>{
          this.loadAllEmployeesToTheList();
          console.log(response);
          
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    console.log(employee);
   
  }

}
