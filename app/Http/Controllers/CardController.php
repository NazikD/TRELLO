<?php

namespace App\Http\Controllers;

use App\Http\Requests\CardRequest;
use Illuminate\Http\Request;
use App\Models\Card;
use App\Models\Column;
use Illuminate\View\View;
use App\Models\User;

class CardController extends Controller
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

    public function create(CardRequest $request)
    {
        $user = auth()->user();
        $card = $user->columns()
            ->find($request->column_id)
            ->cards()
            ->create([
                'title' => $request->title,
                'user_id' => $user['id'],
            ]);

        return $card;
    }

}
