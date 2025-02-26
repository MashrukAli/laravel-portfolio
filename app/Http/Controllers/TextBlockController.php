<?php

namespace App\Http\Controllers;

use App\Models\TextBlock;
use Illuminate\Http\Request;

class TextBlockController extends Controller
{
    public function index()
    {
        $blocks = TextBlock::orderBy('created_at', 'desc')->get();
        return response()->json($blocks);
    }

    public function store(Request $request)
    {
        $block = TextBlock::create([
            'content' => $request->content
        ]);
        return response()->json($block);
    }

    public function update(Request $request, $id)
    {
        $block = TextBlock::find($id);
        $block->update([
            'content' => $request->content
        ]);
        return response()->json($block);
    }

    public function destroy($id)
    {
        TextBlock::find($id)->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}