<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = ['id'];

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_items', 'product_id', 'order_id');
    }

    public function sizes()
    {
        return $this->belongsToMany(Size::class, 'ps', 'product_id', 'size_id')->withPivot("quantity");
    }

    public function pictures()
    {
        return $this->belongsToMany(Picture::class, 'pp', 'product_id', 'picture_id');
    }
}
