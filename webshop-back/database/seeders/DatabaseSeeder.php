<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Order;
use App\Models\OrderItems;
use App\Models\Picture;
use App\Models\PP;
use App\Models\PS;
use App\Models\Product;
use App\Models\Size;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $user = User::create([
            'name' => "Danilo",
            'email' => "admin@admin.com",
            'email_verified_at' => now(),
            'password' => Hash::make("123"), // password
            'is_admin' => 1
        ]);

        $user = User::create([
            'name' => "Makro",
            'email' => "marko@marko.com",
            'email_verified_at' => now(),
            'password' => Hash::make("123"), // password
            'is_admin' => 0
        ]);

        Size::create([
            'size' => '42',
        ]);
        Size::create([
            'size' => '43',
        ]);
        Size::create([
            'size' => '44',
        ]);
        Size::create([
            'size' => '45',
        ]);
        Size::create([
            'size' => '46',
        ]);
        Size::create([
            'size' => '47',
        ]);
    }
}
