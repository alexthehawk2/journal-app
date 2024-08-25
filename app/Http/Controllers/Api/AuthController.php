<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
class AuthController extends Controller
    
    
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response([
                "message" => "Provided email or password is incorrect."
            ])
        }

        $user = Auth::user();
        $token = $user->createToken("access_token")->plainTextToken;
        return response([
            "user" => $user,
            "token"=> $token
        ]);
    }
    

    public function register(RegisterRequest $request){
        $data = $request->validated();
        $user = User::create([
            "email"=> $data["email"],
            "password"=> bcrypt($data["password"]),
            "confirm_password"=> bcrypt($data["confirmPassword"]),
        ]);
        $token = $user->createToken('access_token')->plainTextToken;

        return response([
            'token'=> $token,
            'user'=> $user
        ]);
    }
    

    public function logout(Request $request){
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
