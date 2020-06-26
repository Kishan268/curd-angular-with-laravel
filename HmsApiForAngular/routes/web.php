<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::post('contact','ContactUs@contact_us_data');
Route::post('get-contact-data','ContactUs@getContactData');
Route::post('add-data','ContactUs@addData');
Route::delete('delete-data/{id}','ContactUs@deleteData');
Route::patch('update-data/{id}','ContactUs@updateData');
Route::get('get-one-data/{id}','ContactUs@getOneData');

Route::get('get-country','CountryController@getCountry');
Route::post('get-city','CityController@getCity');
Route::post('get-state','StateController@getState');
// Route::resource('add-data','ContactUs');
