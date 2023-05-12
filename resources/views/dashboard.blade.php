@extends('layouts.app')

@section('content')

<head>
    <link rel="stylesheet" href="{{ asset("css/dashboard/styles.css") }}">
</head>

<body>
    {{-- Columns --}}
    <div class="container-fluid d-flex flex-column">
        <div>
            <dashboard :columns="{{ $columns }}" :user="{{ $user }}"></dashboard>
        </div>
    </div>
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</body>



@endsection
