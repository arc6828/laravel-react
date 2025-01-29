<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    //

    protected $fillable = ['table_id','menu_id','item', 'quantity','options']; // กำหนดฟิลด์ที่สามารถกรอกได้


    protected $casts = [
        'item' => 'object',
        'options' => 'array',
    ]; // แปลง JSON เป็น object

}
