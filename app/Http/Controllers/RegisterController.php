<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreRegister;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Session;

class RegisterController extends Controller
{

      public function __construct(){
            $this->middleware("guest");
      }

      public function index() {
        return Inertia::render('Register');
       }

      public function store(StoreRegister $request) {
       $validated = $request->validated();

       $user = User::create([
             'name' => $validated['name'],
             'email' => $validated['email'],
             'password' => Hash::make($validated['password'])
       ]);


            Auth::login($user);

            Session::flash('message', 'Your account has been created successfully');
            
            return redirect('/');
      }
}
