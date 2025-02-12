<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Chat;
use App\Models\Message;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Suraj',
            'email' => 'suraj.oliver@gmail.com',
            'password' => Hash::make('sunshade'),
        ]);

        // Chat::factory()->count(5)->create()->each(function (Chat $chat) {
        //     Message::factory(7)->create([
        //         'chat_id' => $chat->id
        //     ]);
        // });
    }
}
