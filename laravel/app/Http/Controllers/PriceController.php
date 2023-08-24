<?php

namespace App\Http\Controllers;

use App\Models\Price;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function getPrice(){
        $price = Price::first();
        return response()->json(['price'=>$price->price]);
    }
    public function updatePrice(Request $request){
        $price = Price::first();
        $price->price = $request->price;
        $price->save();
        return response()->json(['success'=>true]);
    }
}
