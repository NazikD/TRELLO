<?php

namespace App\Http\Controllers;

use App\Http\Requests\ColumnRequest;
use Illuminate\Http\Request;
use App\Models\Card;
use App\Models\Column;
use Illuminate\View\View;
use App\Models\User;

class ColumnController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = auth()->user();
        $columns = $user->columns()->with('cards')->get();

        return view('dashboard', compact('columns', 'user'));
    }

    public function create(ColumnRequest $request)
    {
        $user = auth()->user();
        $columns = $user->columns()->create([
            'title' => $request->title
        ]);
        return $columns;
    }
}
