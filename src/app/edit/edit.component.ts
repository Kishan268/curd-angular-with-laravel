import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*import dataServices.............*/
import{ DataService } from '../services/data.service';

/*import employee model.............*/
import{ Employee } from '../employee/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:any;
data:any;
employee = new Employee();
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
  	private route:ActivatedRoute,
  	private dataService:DataService
  	) { }

  ngOnInit(): void {
  	this.id = this.route.snapshot.params.id;
  	this.getData();
  }

  /*Get single user in database using laravel API..............*/
  getData(){

  	this.dataService.getOneData(this.id).subscribe(res=>{
  		this.data =res;
  		this.employee = this.data;
      this.SelectedHobby = this.employee.hobby.split(',');
      console.log(this.employee.hobby);
  	})
  }

  /*update user in database using laravel API..............*/
   updateData(){
    this.employee.hobby = this.SelectedHobby.toString();
 
  	this.dataService.updateData(this.id,this.employee).subscribe(res=>{
  		console.log(res);

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

   // console.log(this.SelectedHobby);

  }

}
