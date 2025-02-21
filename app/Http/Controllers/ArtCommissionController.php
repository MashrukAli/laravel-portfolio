<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ArtCommission;

class ArtCommissionController extends Controller
{
    public function store(Request $request)
    {
        // Validate incoming data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone_number' => 'required|string|max:15',
            'description' => 'required|string',
        ]);

        // Save to database
        ArtCommission::create($validated);

        return response()->json(['message' => 'Art commission submitted successfully!'], 201);
    }
}
