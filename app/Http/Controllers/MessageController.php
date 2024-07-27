<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{


    private function sendOpenAIMessage($chat)
    {
        $messages = [];
        $openai_key = env("OPENAI_KEY");



        foreach($chat->messages()->get() as $message) {
            array_push($messages, [
                "role" => strtolower($message->requestor),
                "content" => $message->body
            ]);
            
        }

        array_push($messages, [
            "role" => 'system',
            "content" => $chat->title
        ]);


        // added code to test
        $prompt       = $chat->title;

        $data = [
                'model'    => 'gpt-3.5-turbo',
                'messages' => array_reverse($messages),
        ];

        //dd($data);

        $options = [
                'http' => [
                        'header'  => "Content-Type: application/json\r\nAuthorization: Bearer $openai_key",
                        'method'  => 'POST',
                        'content' => json_encode($data),
                ],
        ];

        // ok - dd($options);

        $context  = stream_context_create($options);
        $response = file_get_contents('https://api.openai.com/v1/chat/completions', false, $context);
        $response = json_decode($response);
        $response = $response->choices[0]->message->content;
        return $response;

    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'body' => 'required',
            'requestor' => 'required'
        ]);
        $chat_id = $request['chat_id'];
        $chat = Chat::find($chat_id);
        $chat->messages()->create($validated);


        $response = $this->sendOpenAIMessage($chat);

        $chat->messages()->create([
            'requestor' => 'System',
            'body' => $response
        ]);


        return redirect(route('chats.show', $chat_id));

    }



}
