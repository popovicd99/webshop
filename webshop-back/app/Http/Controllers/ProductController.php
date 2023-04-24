<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductSPCollection;
use App\Http\Resources\ProductSPResource;
use App\Models\Product;
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

        foreach ($request->picture_id as $id) {
            $product->pictures()->attach($id);
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
        $product->name = $request->name;
        $product->desc = $request->desc;
        $product->price = $request->price;
        $product->update();
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
}
