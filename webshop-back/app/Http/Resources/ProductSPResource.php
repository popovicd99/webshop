<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSPResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = 'products';
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'desc' => $this->resource->desc,
            'price' => $this->resource->price,
            'sizes' => new SizeCollection($this->resource->sizes),
            'pictures' => new PictureCollection($this->resource->pictures)
        ];
    }
}
