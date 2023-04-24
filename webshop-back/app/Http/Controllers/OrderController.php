<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = new OrderCollection(Order::with('products')->get());
        return response()->json([
            'orders' => $orders
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
        $order = Order::create([
            'phone' => $request->phone,
            'adress' => $request->adress,
            'city' => $request->city,
            'postcode' => $request->postcode,
            'country' => $request->country,
            'user_id' => $request->user_id
        ]);

        foreach ($request->product_id as $id) {
            $order->products()->attach($id);
        }

        return response()->json("Uspesno dodat");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        $orders = new OrderResource(Order::with('products')->find($order->id));
        return response()->json([
            'orders' => $orders
        ], 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        $order->delete();
        return response()->json("Uspesno izbrisan");
    }
}
