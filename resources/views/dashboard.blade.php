<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <link rel="stylesheet" href="{{ asset("css/dashboard/styles.css") }}">
</head>

<body>
    {{-- Navbar --}}
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">TRELLO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-3 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    {{-- Close column --}}
    <div class="col-2 create-column">
        <p class="create-column_text">Add column</p>
    </div>
    {{-- Columns --}}
      <div class="container">
        <div class="row">
            <div class="col-3 tasks-column dropZone" id="1">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" contenteditable="true">Need to do
                        </h5>
                      <p class="card-text">
                        <input class="task-title" id="create-title" type="text" value="" placeholder="Add Task">
                      </p>
                    </div>
                    <a href="#" class="btn btn-primary add-card">Add card</a>
                </div>
            </div>
        </div>
      </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="{{ asset("js/dashboard/scripts.js") }}"></script>
</html>
