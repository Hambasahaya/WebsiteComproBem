<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/portofolio', function () {
    return view('portofolio');
});

Route::get('/contactus', function () {
    return view('contactus');
});
