<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class FrontpageController extends Controller
{
    public function index() {
        return Inertia::render('Frontpage');
    }
}
