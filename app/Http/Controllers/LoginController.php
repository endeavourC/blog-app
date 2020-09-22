<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Http\Request;
use App\Http\Requests\StoreLogin;
use Session;

class LoginController extends Controller
{

   public function __construct() {
      $this->middleware('guest')->except('logout');
   }

   public function index() {
        return Inertia::render('Login');
   }


   public function logout() {
      Auth::logout();

      Session::flash('message', 'You logout successfully');

      return redirect('login');
   }


   public function store (StoreLogin $request) {

      $validated = $request->validated();

      if( Auth::attempt($validated) ) {
         
         Session::flash('message', 'You logged in successfully');

         return redirect('/');

      } 

         return redirect('login')->withErrors('Uncorrect Login or Password.');
      
   }
}
