<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class SizeCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $sizes = [];

        foreach ($this->collection as $size) {

            array_push($sizes, [
                'size' => $size->size,
                'quantity' => $size->pivot->quantity
            ]);
        }

        return $sizes;
    }
}
