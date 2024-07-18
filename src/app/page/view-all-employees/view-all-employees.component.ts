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

  public updatedEmployee = {
    id: undefined,
    firstName : undefined,
    lastName : undefined,
    email : undefined,
    departmentId : undefined,
    roleId : undefined
  }

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
    // console.log(employee);
   
  }
  public id:any = undefined;
  public firstName:any = undefined;
  public lastName:any =  undefined;
  public email:any =  undefined;
  public departmentId :any = undefined;
  public roleId :any = undefined;

  
  updateEmployee(employee: any){

      this.id = employee.id;
      this.firstName = employee.firstName;
      this.lastName = employee.lastName;
      this.email = employee.email;
      this.departmentId = employee.departmentId;
      this.roleId = employee.roleId
       
      }

  public updateConfirmed(){

      this.updatedEmployee.id = this.id;
      this.updatedEmployee.firstName = this.firstName;
      this.updatedEmployee.lastName = this.lastName;
      this.updatedEmployee.email = this.email;
      this.updatedEmployee.departmentId = this.departmentId;
      this.updatedEmployee.roleId = this.roleId;


      if(this.updatedEmployee != null){
          
        this.http.put("http://localhost:8080/employee/update-emp", this.updatedEmployee).subscribe(
          (data) => {
            console.log(data);
          }
        )
      }
  }
}


