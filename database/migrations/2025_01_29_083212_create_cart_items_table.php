<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->integer('table_id')->nullable(); // หมายเลขโต๊ะ
            $table->integer('menu_id')->nullable(); // เชื่อมโยงกับ Menu table
            $table->json('item')->nullable(); // เก็บรายการอาหารใน JSON            
            $table->integer('quantity')->default(1); // จำนวนสินค้าในตะกร้า
            $table->json('options')->nullable(); // เก็บ options ใน JSON
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};
