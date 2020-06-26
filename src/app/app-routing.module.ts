import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
	{'path':'','component':EmployeeComponent},
	{'path':'edit/:id','component':EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
