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

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        
        

        $user = User::factory()->create();

        $order = Order::factory()->create([
            'user_id' => $user->id
        ]);
        
        $product = Product::factory()->create();

        $order_item = OrderItems::create([
            'order_id' => $order->id,
            'product_id' => $product->id
        ]);

        $size = Size::create([
            'size' => '43'
        ]);

        $picture = Picture::create([
            'file_path' => 'Neki path'
        ]);

        $pp = PP::create([
            'picture_id' => $picture->id,
            'product_id' => $product->id
        ]);

        $ps = PS::create([
            'size_id' => $size->id,
            'product_id' => $product->id
        ]);


    }
}
