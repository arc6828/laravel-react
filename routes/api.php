<?php

use App\Http\Controllers\Api\CartItemController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\OrderItemController;
use App\Http\Controllers\Api\ProductController;
use App\Models\CartItem;
use App\Models\Menu;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/product', ProductController::class);
// Route::apiResource('/menu', MenuController::class);
Route::get('/menu', function () {
    $menus = Menu::get();
    return response()->json($menus); 
});
Route::apiResource('/cart-item', CartItemController::class);
Route::apiResource('/order-item', OrderItemController::class);

// Route::get('/orders', function () {
//     $orders = OrderItem::get();
//     return response()->json($orders); 
// });
// Route::post('/orders', function (Request $request) {

//     $cart = $request->input("cart");
    
//     //ย้ายของใน Cart ไป Order พร้อม Clear Cart    
//     foreach($cart as $item){
//         // สร้าง Order
//         OrderItem::create($item);

//         // Clear Cart
//         CartItem::destroy($item["id"]);
//     }    

//     $message = ["message"=> $cart ];
//     return response()->json($message, 201); 
// });


// Route::get('/product', function () {
//     $products = Product::all(); // Fetch all products
//     return response()->json($products); // Return as JSON
// });
