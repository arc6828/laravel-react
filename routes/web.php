<?php

use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

Route::get('/tictactoe', function () {
    return Inertia::render('Tictactoe');
})->name('tictactoe');

Route::get('/fruit', function () {
    return Inertia::render('Fruit');
})->name('fruit');

Route::get('/hello-teacher', function () {
    return Inertia::render('HelloTeacher');
})->name('hello-teacher');

Route::get('/bootstrap', function () {
    return Inertia::render('BootstrapContent');
})->name('bootstrap');

Route::get('/circle', function () {
    return Inertia::render('Circle');
})->name('circle');

Route::get('/counter', function () {
    return Inertia::render('Counter');
})->name('counter');

Route::get('/form-example', function () {
    return Inertia::render('FormExample');
})->name('form-example');

Route::get('/list-manager', function () {
    return Inertia::render('ListManager');
})->name('list-manager');

Route::get('/infinite-scroll', function () {
    return Inertia::render('InfiniteScrollExample');
})->name('infinite-scroll');

Route::get('/product', function () {
    $products = Product::all();
    return Inertia::render('ProductList', ['products' => $products]);
})->name('product');

Route::get('/product-others', function () {
    return Inertia::render('ProductOthers');
})->name('product-others');