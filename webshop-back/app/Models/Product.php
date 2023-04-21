<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function order_items()
    {
        return $this->HasMany(OrderItems::class);
    }

    public function pp()
    {
        return $this->HasMany(PP::class);
    }

    public function ps()
    {
        return $this->HasMany(PS::class);
    }

}
