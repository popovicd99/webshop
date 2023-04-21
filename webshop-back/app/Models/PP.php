<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PP extends Model
{
    use HasFactory;

    public $table = 'pp';

    public $timestamps = false;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function picture()
    {
        return $this->belongsTo(Picture::class);
    }

    

}
