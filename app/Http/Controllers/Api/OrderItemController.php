<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $orders = OrderItem::get();
        return response()->json($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cart = $request->input("cart");

        //ย้ายของใน Cart ไป Order พร้อม Clear Cart    
        foreach ($cart as $item) {
            // สร้าง Order
            OrderItem::create($item);

            // Clear Cart
            CartItem::destroy($item["id"]);
        }

        $message = ["message" => $cart];
        return response()->json($message, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
