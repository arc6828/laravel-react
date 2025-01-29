<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartItemController extends Controller
{
    // แสดงรายการสินค้าในตะกร้า
    public function index()
    {
        $cartItems = CartItem::get();
        return response()->json($cartItems);
    }

    // เพิ่มสินค้าในตะกร้า
    public function store(Request $request)
    {
        $request->validate([
            'menu_id' => 'required|exists:menus,id', // ตรวจสอบสินค้าในตาราง menus
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem = CartItem::create([
            'table_id' => $request->table_id,
            'menu_id' => $request->menu_id,
            'item' => $request->item,            
            'quantity' => 1,
            'options' => [],
            // 'quantity' => $request->quantity
        ]);

        return response()->json($cartItem, 201); // คืนค่า cart item ที่ถูกสร้าง
    }

    // อัปเดตจำนวนสินค้าในตะกร้า
    public function update(Request $request, $id)
    {
        $cartItem = CartItem::findOrFail($id);
        $cartItem->update([
            'quantity' => $request->quantity
        ]);

        return response()->json($cartItem);
    }

    // ลบสินค้าออกจากตะกร้า
    public function destroy($id)
    {
        $cartItem = CartItem::findOrFail($id);
        $cartItem->delete();

        return response()->json(null, 204); // คืนค่าหลังจากลบเสร็จ
    }
}
