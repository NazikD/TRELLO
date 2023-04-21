@extends('layouts.app')

@section('content')

<head>
    <link rel="stylesheet" href="{{ asset("css/dashboard/styles.css") }}">
</head>


    {{-- Columns --}}
        {{-- Close column --}}
        <div class="row">
        <div class="col-4">
            <label  class="name-column" for="name-column">Add name column
                <input type="text" id="name-column" required>
            </label>
        </div>
        <div class="col-2 create-column">
            <p class="create-column_text">Add column</p>
        </div>
        </div>
      <div class="container">
        <div class="row body-column">
            <div class="col-3 tasks-column dropZone" id='1'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" contenteditable="true">Need to do
                        </h5>
                        <p class="card-text">
                            <input class="task-title" id="create-title" type="text" value="" placeholder="Add Task" data-value="1">
                          </p>
                    </div>
                    <a href="#" class="btn btn-primary add-card" data-column='1' data-value="1">Add card</a>
                </div>
            </div>


            <input type="hidden" class="column-id">
        </div>
      </div>

      <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="{{ asset("js/dashboard/scripts.js") }}"></script>

@endsection
