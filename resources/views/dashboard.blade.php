@extends('layouts.app')

@section('content')

<head>
    <link rel="stylesheet" href="{{ asset("css/dashboard/styles.css") }}">
</head>

<body>
    {{-- Create-Columns --}}
    <create-column></create-column>
    {{-- Columns --}}
    <div class="container-fluid d-flex flex-column">
        <div class="row flex-grow-1 body-column">
            @foreach ($columns as $column)
            <column :column="{{ $column }}" :user="{{ $user }}"></column>
            @endforeach
        </div>
    </div>
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</body>



@endsection
