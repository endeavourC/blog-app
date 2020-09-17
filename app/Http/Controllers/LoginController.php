<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Http\Request;
use App\Http\Requests\StoreLogin;
class LoginController extends Controller
{

   public function __construct() {
      $this->middleware('guest')->except('logout');
   }

   public function index() {
        return Inertia::render('Login');
   }


   public function store (StoreLogin $request) {

      $validated = $request->validated();

      if( Auth::attempt(['email' => $validated['email'], 'password' => $validated['password']])) {
         
         return redirect('/')->with('message', 'You logged in successfully');

      } else {
         return redirect('login')->withErrors('Uncorrect Login or Password.');
      }
      
   }
}
