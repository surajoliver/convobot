<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ChatSessionController extends Controller
{

    public function create(Request $request) 
    {
        return 'create';
        return Inertia::render('Chats/ChatLogin');
    }
    public function store(Request $request)
    {


    }

    public function destroy(Request $request)
    {

    }
}
