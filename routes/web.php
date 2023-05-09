<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [App\Http\Controllers\ColumnController::class, 'index'])->name('home');

Route::get('/home', function () {
    return redirect('/');
});

Route::post('/card', [App\Http\Controllers\CardController::class, 'create']);

Route::post('/column', [App\Http\Controllers\ColumnController::class, 'create']);


Auth::routes();
