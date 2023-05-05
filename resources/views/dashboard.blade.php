@extends('layouts.app')

@section('content')

<head>
    <link rel="stylesheet" href="{{ asset("css/dashboard/styles.css") }}">
</head>

<body>
    {{-- Create-Columns --}}

    <div class="row justify-content-end">
        <div class="col-2 create-column" id="myBtn">
            <p class="create-column_text">Add column</p>
        </div>
    </div>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="modal-content-body">
                <span class="close">&times;</span>
                <label class="name-column" for="name-column">
                    <h4>Add name column</h4>
                    <div class="form-floating">
                        <input class="form-control" placeholder="Leave a name here" id="name-column">
                        <label for="floatingTextarea">Name column</label>
                    </div>
                    <p class="errors">Please enter a name</p>
                </label>
                <button class="btn btn-secondary add-column">Create column</button>
            </div>
        </div>
    </div>
    {{-- Columns --}}
    <div class="container-fluid d-flex flex-column">
        <div class="row flex-grow-1 body-column">

            @foreach ($columns as $column)
            <column :column="{{ $column }}"></column>
            {{-- <div class="col-3 tasks-column-{{$column->id}} dropZone" id='1'>
                <div class="card">
                    <h5 class="card-title" contenteditable="true">{{ $column->title }}
                    </h5>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-secondary" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-{{ $column->id }}"
                                    aria-expanded="false" aria-controls="flush-collapseOne-{{ $column->id }}">
                                    <div class="add-card" data-column="{{ $column->id }}"
                                        data-value="{{ $column->id }}">Add card</div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne-{{ $column->id }}" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="card-body">
                                        <div class="card-body-modal">
                                            <p class="card-text">
                                                <input class="task-title" id="create-title" type="text" value=""
                                                    placeholder="Add Task" data-value="{{ $column->id }}">
                                                <button class="btn btn-dark create-card"
                                                    data-value="{{ $column->id }}">Create</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" class="column-id" value="{{ $column->id }}"> --}}
                {{-- <div class='task dragItem' draggable='true'>
                    <p class='task-title'> {{ $card->title }}
                    <div class='task-close'></div>
                    </p>
                    <input type='hidden' value='{{ $card->id }}'>
                </div> --}}
                {{-- @endforeach --}}
                {{--
            </div> --}}

            @endforeach
        </div>
    </div>
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
    {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> --}}
    {{-- <script src="{{ asset("js/dashboard/scripts.js") }}"></script> --}}
</body>



@endsection
