<?php

use App\Http\Controllers\PriceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware(['auth:sanctum', 'admin'])->get('/price', [\App\Http\Controllers\PriceController::class, 'getPrice']);
// Route::middleware(['auth:sanctum', 'admin'])->post('/price', [\App\Http\Controllers\PriceController::class, 'updatePrice']);


Route::get('/price', [\App\Http\Controllers\PriceController::class, 'getPrice']);
Route::post('/price', [\App\Http\Controllers\PriceController::class, 'updatePrice']);
