<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function products()
    {
        return $this->belongsToMany(Product::class,'ps','size_id','product_id');
    }

}
