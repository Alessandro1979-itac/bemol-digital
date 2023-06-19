<?php

use Illuminate\Support\Facades\Route;
use Modules\BemolDigitalLaravelChallenge\Presentation\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('/bemoldigitallaravelchallenge')->group(function () {
    Route::get('', [UserController::class, 'index'])->name('users.index');
    Route::get('{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::post('', [UserController::class, 'store'])->name('users.store');
    Route::put('{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('user', [UserController::class, 'destroy'])->name('users.destroy');
});
