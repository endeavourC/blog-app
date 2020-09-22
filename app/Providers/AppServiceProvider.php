<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Session;
use Illuminate\Support\Facades\Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share('flash', function () {
            return [
                'message' => Session::get('message'),
            ];
        });

        Inertia::share([
            'auth'  =>  function(){
                return [
                    'user'  => Auth::user() ? [
                        'id'    => Auth::user()->id,
                        'nickname'  => Auth::user()->name
                    ] : null
                ];
            }
        ]);
    }
}
