import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DataService {
	// data:any;
	base_url:any = 'http://127.0.0.1:8000/';
  constructor(
  	private httpClient:HttpClient
  	) { }

  getData(data){

  	  return this.httpClient.post('http://127.0.0.1:8000/get-contact-data',data)
  }

  addData(data){

  	  return this.httpClient.post('http://127.0.0.1:8000/add-data',data);

  }

  deleteContactUsData(id){

  	  return this.httpClient.delete('http://127.0.0.1:8000/delete-data/'+id);

  }
  getOneData(id){
  	// console.log(id);
  	  return this.httpClient.get('http://127.0.0.1:8000/get-one-data/'+id);

  }

	updateData(id,data){

	  	  return this.httpClient.patch('http://127.0.0.1:8000/update-data/'+id,data);

	  }

  getCounty1(){

      return this.httpClient.get('http://127.0.0.1:8000/get-country');
  }

  getState1(data){
      return this.httpClient.post('http://127.0.0.1:8000/get-state',data);
  }

  getcity1(data){
      return this.httpClient.post('http://127.0.0.1:8000/get-city',data);
  }
}


