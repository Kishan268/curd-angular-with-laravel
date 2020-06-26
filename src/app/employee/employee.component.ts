import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { EmployeeModule } from './employee.module'
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
	  data:any;
    employee = new EmployeeModule();
    dataArr:any;
    value:any;
    countyArr:any;
    stateArr:any;
    cityArr:any;
    files:any;
    imageDirectoryPath:any = "http://127.0.0.1:8000/public/image/";
    page:any=1;
    limit:any=10;
    skip:any;
    totalCount:any;

    // for hobbies...............
    SelectedHobby:any = [];
    HobbiesArray =[
      {
        'key':'cricket',
        'value':'cricket'
      },
      {
        'key':'chess',
        'value':'chess'
      },
      {
        'key':'dance',
        'value':'dance'
      }
    ]
  constructor(
  	private dataService:DataService,
    private spinner: NgxSpinnerService
  	) { }

  ngOnInit(): void {
  	this.getEmployeeData();
    this.getCounty();
  }

  /*Get all user from database using laravel API..............*/
  getEmployeeData(){
    // code for Show loader....................
     this.spinner.show();
    // Pagination code.............................
    if(this.page==1)
    {
      this.skip=0;
    }else{
      this.skip=(this.page-1)*this.limit;
     }
     var requestObj={
      'limit':this.limit,
       'skip':this.skip
    }
    // End Pagination code.............................

  	this.dataService.getData(requestObj).subscribe((res:any)=>{
      // setTimeout(() => {
      /** spinner ends after 5 seconds */
        this.spinner.hide();
      // }, 2000);
  		this.dataArr=res.data;
      this.totalCount=res.totalRecord;
  		
  	})
  }
  /*add user in database using laravel API..............*/

  insertData(){
    // add Hobbie code.....................
    this.employee.hobby = this.SelectedHobby.toString();
    /*Updaload image.......................*/
    let formData = new FormData();
    console.log(this.files);
    formData.append("file",this.files,this.files.name);
    formData.append("data",JSON.stringify(this.employee));
    // console.log(this.employee);
  	this.dataService.addData(formData).subscribe(res=>{
  		this.getEmployeeData();
      // this.insertData();

  	 })

  }
  /*code for delete user in database using laravel API..............*/

  deleteData(id){

  	this.dataService.deleteContactUsData(id).subscribe(res=>{
  		this.getEmployeeData();

  	 })

  }
  /*add hobbies in database using laravel API..............*/

  hobbyChange(event){
    // console.log(event.target.value);
  let index=this.SelectedHobby.indexOf(event.target.value);
   // console.log(index);
   if(index==-1){
     this.SelectedHobby.push(event.target.value);

   }else{
     this.SelectedHobby.splice(index,1);
   }


  }

  /*get county in database using laravel API..............*/
  getCounty(){
    this.dataService.getCounty1().subscribe(res=>{
      this.countyArr=res;
    });
  
  } 

  /*get state in database using laravel API..............*/
  getState(event){
    // console.log(event.target.value);
    var obj = {
      country_id:event.target.value
    }
    this.dataService.getState1(obj).subscribe(res=>{
    this.stateArr=res;
     });
  }

  /*get state in database using laravel API..............*/
  getCity(event){
    var obj = {
      state_id:event.target.value
    }
    this.dataService.getcity1(obj).subscribe(res=>{
    this.cityArr=res;
     });
  }
  
  /*upload file in database using laravel API..............*/
  fileUpload(event){
    
      this.files = event.target.files[0];
    
    console.log(this.files);
    // this.dataService.getcity1(obj).subscribe(res=>{
    // this.cityArr=res;
    //  });
  }
}