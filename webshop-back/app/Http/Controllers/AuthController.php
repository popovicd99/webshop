<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        if ($validator->fails()) return response()->json($validator->errors());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('token')->plainTextToken;
        return response()->json([
            'user' => $user,
            'token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) return response()->json(['success' => false], 401);

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('token')->plainTextToken;

        return response()->json([
            'id' => $user->id,
            'success' => true,
            'admin' => $user->is_admin,
            'token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function logout()
    {
        auth('sanctum')->user()->tokens()->delete();
        return response()->json([
            'message' => 'Uspesan logout'
        ]);
    }
}
