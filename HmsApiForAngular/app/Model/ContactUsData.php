<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use DB;
class ContactUsData extends Model
{
	protected $table = 'contact_us_data';
    protected $guarded = ['*'];

    public function getEmployeeData($limit,$skip){
    	
    	$data = DB::table('contact_us_data')->skip($skip)->take($limit)->orderBy('id', 'DESC')->get();
    	return $data;
    }

    public function getTotalEmployeeData(){
        
        $data = DB::table('contact_us_data')->get()->count();
        return $data;
    }

    public function addEmployeeData($data){
    	 
    	$data = DB::table('contact_us_data')->insert($data);
    	 return response()->json($data);
    }

    public function deleteEmployeeData($id){

       $data = DB::table('contact_us_data')->where('id',$id)->delete();
        return response()->json($data);
    }
    public function updateEmployeeData($id,$data){

       $data = DB::table('contact_us_data')->where('id',$id)->update($data);
        return response()->json($data);
    }
    public function getOneEmployeeData($id){

       $data = DB::table('contact_us_data')->where('id',$id)->first();
          return $data;


    }
}
