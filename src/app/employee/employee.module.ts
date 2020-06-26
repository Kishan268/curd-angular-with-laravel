import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EmployeeComponent } from './employee/employee.component';
// import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EmployeeModule {
	name:any;
	email:any;
	mobile_no:any;
	message:any;
  hobby:any;
  country:any='';
  state:any='';
  city:any='';
  
 }
