<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontpageController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
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

Route::get('/', [FrontpageController::class, 'index']);

Route::get('/login', [LoginController::class, 'index']);

Route::post('/login', [LoginController::class, 'store']);

Route::get('/register', [RegisterController::class, 'index']);

Route::post('/register', [RegisterController::class, 'store']);

Route::get('/logout', [LoginController::class, 'logout']);
