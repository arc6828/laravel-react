<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    
    public function index(Request $request)
    {
        $menus = Menu::all();
        return response()->json($menus);
    }
}
