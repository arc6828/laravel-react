<?php

use App\Http\Controllers\Api\CartItemController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\ProductController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/product', ProductController::class);
Route::apiResource('/menu', MenuController::class);
Route::apiResource('/cart-item', CartItemController::class);

// Route::get('/product', function () {
//     $products = Product::all(); // Fetch all products
//     return response()->json($products); // Return as JSON
// });
