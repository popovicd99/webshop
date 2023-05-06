<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::resource('orders', OrderController::class)->only([
    'index', 'store', 'show', 'destroy'
]);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(["middleware" => ["auth:sanctum"]], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::resource('products', ProductController::class)->only([
        'store', 'update', 'destroy'
    ]);
    Route::post('/product', [ProductController::class, 'updateSizes']);
});
Route::resource('products', ProductController::class)->only([
    'index', 'show'
]);
Route::get('/product/{name}', [ProductController::class, 'getbyName']);
Route::get('/search/{name}', [ProductController::class, 'search']);
Route::get('/filter', [ProductController::class, 'filter']);
