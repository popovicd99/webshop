<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'file_path'
    ];
    public function products()
    {
        return $this->belongsToMany(Product::class, 'pp', 'picture_id', 'product_id');
    }
}
