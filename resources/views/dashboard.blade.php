@extends('layouts.app')

@section('content')

<head>
    <link rel="stylesheet" href="{{ asset("css/dashboard/styles.css") }}">
</head>

<body>
    {{-- Columns --}}
    {{-- Close column --}}
    <div class="row">
        <div class="col-4">
            <label class="name-column" for="name-column">Add name column
                <input type="text" id="name-column" required>
            </label>
        </div>
        <div class="col-2 create-column">
            <p class="create-column_text">Add column</p>
        </div>
    </div>

    <div class="container-fluid d-flex flex-column">

        <div class="row flex-grow-1 body-column">
            @foreach ($columns as $column)
            <div class="col-3 tasks-column dropZone" id='1'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" contenteditable="true">{{ $column->title }}
                        </h5>
                        <p class="card-text">
                            <input class="task-title" id="create-title" type="text" value="" placeholder="Add Task"
                                data-value="{{ $column->id }}">
                        </p>
                    </div>
                    <a href="#" class="btn btn-primary add-card" data-column="{{ $column->id }}"
                        data-value="{{ $column->id }}">Add card</a>
                </div>
                <input type="hidden" class="column-id" value="{{ $column->id }}">

                @foreach ($column->cards as $card)
                <div class='task dragItem' draggable='true'>
                    <p class='task-title'> {{ $card->title }}
                        <div class='task-close'></div>
                    </p>
                    <input type='hidden' value='{{ $card->id }}'>
                </div>
                @endforeach
            </div>
            @endforeach
        </div>

    </div>

    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="{{ asset("js/dashboard/scripts.js") }}"></script>

@endsection
