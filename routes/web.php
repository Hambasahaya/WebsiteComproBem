<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.home');
})->name("home");

Route::get('/about', function () {
    return view('pages.about');
})->name('about');

Route::get('/berita', function () {
    return view('berita');
})->name('berita');

Route::get('/contactus', function () {
    return view('contactus');
})->name('contacUs');
