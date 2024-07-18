import { Routes } from '@angular/router';
import { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component';
import { ViewAllEmployeesComponent } from './page/view-all-employees/view-all-employees.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:ManageEmployeeComponent
    },
    {
        path:"view-all-employees",
        component: ViewAllEmployeesComponent
    }
];
