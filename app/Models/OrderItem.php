<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    // กำหนดฟิลด์ที่สามารถกรอกได้
    protected $fillable = ['table_id','menu_id','item', 'quantity','options','status'];
    protected $casts = [
        'item' => 'object',
        'options' => 'array',
    ]; // แปลง JSON เป็น object
}
