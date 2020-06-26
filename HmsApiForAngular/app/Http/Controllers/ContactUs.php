<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\ContactUsData;
// use Illuminate\Support\Facades\Validator;
use Validator;
class ContactUs extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        echo "string";
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        dd($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        dd($request);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function addData(Request $request){
        // dd($request);
        // image upload code................
        $file = $request->file('file');
        $uploadPath = "public/image";
        $originalImage = $file->getClientOriginalName();
        $file->move($uploadPath,$originalImage);
        //End image upload code................

        $empployeeData = json_decode($request->data,true);
        $empployeeData['image'] = $originalImage;
        // dd($empployeeData);
        $contactUsDataModel = new ContactUsData();
        $data = $contactUsDataModel->addEmployeeData($empployeeData);
            return response()->json($data);

        

    }
    public function getContactData(Request $request){

        $limit = $request->limit;
        $skip = $request->skip;

        $contactUsDataModel = new ContactUsData();
        $data = $contactUsDataModel->getEmployeeData($limit,$skip);
        $totalCount =  $contactUsDataModel->getTotalEmployeeData();
        $response['data'] = $data;
        $response['totalRecord']= $totalCount;
        // dd($totalCount);
          return response()->json($response);
    }
    
    public function deleteData($id){

        $contactUsDataModel = new ContactUsData();
        $data = $contactUsDataModel->deleteEmployeeData($id);
        return response()->json($data);
    } 
    public function updateData(Request $request, $id){

        $contactUsDataModel = new ContactUsData();
        $data = $contactUsDataModel->updateEmployeeData($id,$request->all());
        return response()->json($data);
    } 
    public function getOneData($id){

        $contactUsDataModel = new ContactUsData();
        $data = $contactUsDataModel->getOneEmployeeData($id);

        return response()->json($data);
    }
}
