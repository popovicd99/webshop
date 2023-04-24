<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'order';
    public function toArray($request)
    {
        return [
            "id" => $this->resource->id,
            "phone" => $this->resource->phone,
            "adress" => $this->resource->adress,
            "city" => $this->resource->city,
            "postcode" => $this->resource->postcode,
            "country" => $this->resource->country,
            "products" => new ProductCollection($this->resource->products)
        ];
    }
}
