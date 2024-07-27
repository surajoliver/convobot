<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Chat::all();
        return Inertia::render("Chats/Index", [
            "chats" => Chat::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Chats/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request->user());
        $validated = $request->validate([
            'title' => 'required'
        ]);
        $chat = $request->user()->chats()->create($validated);

        return redirect()->route('chats.show', $chat->id);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $chat = Chat::with('messages')->find($id);
        return Inertia::render("Chats/Show", [
            "chat" => $chat
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        $chat->delete();

        return redirect()->route("chats.index");
    }
}
