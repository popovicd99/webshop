<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductSPCollection;
use App\Http\Resources\ProductSPResource;
use App\Models\Picture;
use App\Models\Product;
use App\Models\PS;
use App\Models\Size;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $products = new ProductSPCollection(Product::with(['sizes', 'pictures'])->get());
        return response()->json([
            'products' => $products
        ], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'price' => $request->price
        ]);

        foreach ($request->pictures as $picture) {
            $newPicture = Picture::create([
                'file_path' => $picture->getClientOriginalName()
            ]);
            $product->pictures()->attach($newPicture->id);
        }
        foreach (Size::get() as $size) {
            $product->sizes()->attach($size->id);
        }
        return response()->json("Uspesno dodat");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $products = new ProductSPResource(Product::with(['sizes', 'pictures'])->find($product->id));
        return response()->json([
            'products' => $products
        ], 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $ids = $product->sizes()->allRelatedIds();
        $products = new ProductSPResource(Product::with(['sizes', 'pictures'])->find($product->id));
        foreach ($ids as $id) {
            $products->sizes()->updateExistingPivot($id, ['quantity' => $request->input($id + 41)]);
        }
        return response()->json("Uspesno updateovan");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json("Uspesno izbrisan");
    }

    public function getbyName(String $name)
    {
        $product = new ProductSPResource(Product::with(['sizes', 'pictures'])->where('name', 'LIKE', $name)->first());
        return response()->json([
            'product' => $product
        ], 200);
    }
    public function updateSizes(Request $request)
    {
        foreach ($request->products as $product) {
            $pr = new ProductSPResource(Product::with(['sizes', 'pictures'])->find($product['id']));
            foreach ($product['sizes'] as $size) {
                $var = PS::where('product_id', '=', $product['id'])->where('size_id', '=', $size['size'] - 41)->first();
                $var["quantity"] = $var["quantity"] - $size['quantity'];
                $pr->sizes()->updateExistingPivot($size['size'] - 41, ['quantity' => $var["quantity"]]);
                return response()->json("Uspesno promenjeno stanje");
            }
        }
    }
    public function search(String $name)
    {
        $products = new ProductSPCollection(Product::with(['sizes', 'pictures'])->where('name', 'LIKE', '%' . $name . '%')->get());
        return response()->json([
            'products' => $products
        ], 200);
    }

    public function filter(Request $request)
    {
        $bottom = 0;
        $top = 0;
        if ($request['price'] == 0) {
            $products = new ProductSPCollection(Product::with(["sizes" => function ($query) use ($request) {
                $query->where('size_id', '=', $request['size'] - 41)->where('quantity', '!=', 0);
            }, 'pictures'])->get());
            return response()->json([
                'products' => $products
            ], 200);
        } else if ($request['size'] == 0) {
            switch ($request['price']) {
                case 1:
                    $bottom = 0;
                    $top = 25;
                    break;
                case 2:
                    $bottom = 25;
                    $top = 50;
                    break;
                case 3:
                    $bottom = 50;
                    $top = 250;
                    break;
                case 4:
                    $bottom = 250;
                    $top = 600;
                    break;
                case 5:
                    $bottom = 600;
                    $top = 1000;
                    break;
            }
            $products = new ProductSPCollection(Product::with(["sizes", 'pictures'])->whereBetween('price', [$bottom, $top])->get());
            return response()->json([
                'products' => $products
            ], 200);
        } else {
            switch ($request['price']) {
                case 1:
                    $bottom = 0;
                    $top = 25;
                    break;
                case 2:
                    $bottom = 25;
                    $top = 50;
                    break;
                case 3:
                    $bottom = 50;
                    $top = 250;
                    break;
                case 4:
                    $bottom = 250;
                    $top = 600;
                    break;
                case 5:
                    $bottom = 600;
                    $top = 1000;
                    break;
            }
            $products = new ProductSPCollection(Product::with(["sizes" => function ($query) use ($request) {
                $query->where('size_id', '=', $request['size'] - 41)->where('quantity', '!=', 0);
            }, 'pictures'])->whereBetween('price', [$bottom, $top])->get());
            return response()->json([
                'products' => $products
            ], 200);
        }
    }
}
