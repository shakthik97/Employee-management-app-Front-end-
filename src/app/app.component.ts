import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component';
import { ViewAllEmployeesComponent } from './page/view-all-employees/view-all-employees.component';
import { HeaderComponent } from "./navigations/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ManageEmployeeComponent, ViewAllEmployeesComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-management-app';
}
