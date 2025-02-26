<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArtCommissionController;
use App\Http\Controllers\TextBlockController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Main route for SPA
Route::get('/', function () {
    return Inertia::render('Home'); // This will render resources/js/Pages/Home.jsx
});
Route::get('/tasks', function () {
    return Inertia::render('Tasks');
})->name('tasks');

Route::view('/{any}', 'app')->where('any', '.*');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/api/art-commissions', [ArtCommissionController::class, 'store'])->name('art-commissions.store');

Route::get('/text-blocks', [TextBlockController::class, 'index'])->name('text-blocks.index');
Route::post('/text-blocks', [TextBlockController::class, 'store'])->name('text-blocks.store');
Route::delete('/text-blocks/{id}', [TextBlockController::class, 'destroy'])->name('text-blocks.destroy');
Route::put('/text-blocks/{id}', [TextBlockController::class, 'update'])->name('text-blocks.update');

require __DIR__.'/auth.php';
