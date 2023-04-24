<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PictureCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $pictures = [];

        foreach ($this->collection as $picture) {

            array_push($pictures, [
                'file_path' => $picture->file_path
            ]);
        }

        return $pictures;
    }
}
