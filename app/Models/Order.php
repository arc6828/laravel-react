<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    use HasFactory;
    protected $fillable = ['table_number', 'items', 'total_price', 'status'];
    protected $casts = ['items' => 'array']; // แปลง JSON เป็น array
}
