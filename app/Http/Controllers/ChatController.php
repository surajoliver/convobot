<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Chat::all();
        $chats = Auth::user()->chats()->latest()->get();
        return Inertia::render("Chats/Index", [
            "chats" => $chats
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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
        $chats = Auth::user()->chats()->latest()->get();
        $chat = Chat::find($id);
        $messages = $chat->messages()->latest()->get();
        // return $messages;
        return Inertia::render("Chats/ChatShow", [
            "chats" => $chats,
            "chat" => $chat,
            "messages" => $messages
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
