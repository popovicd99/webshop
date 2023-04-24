<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'products';
    public function toArray($request)
    {
        $products = [];

        foreach ($this->collection as $product) {

            array_push($products, [
                'name' => $product->name,
                'desc' => $product->desc,
                'price' => $product->price
            ]);
        }

        return $products;
    }
}
