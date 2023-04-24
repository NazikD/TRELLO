let tasksColumn = document.querySelector(".tasks-column");
let button = document.querySelector(".add-card");
var title = document.querySelector(".task-title");
var text = document.querySelector(".task-text");

$(document).ready(function () {
    /* Change-Title */
    // function changeTitle() {
    //     const titlesColumn = document.querySelectorAll('.card-title');
    //     titlesColumn.forEach( title => {
    //         title.addEventListener('click', e=>e.target.textContent = '')
    //     });
    // }

    /* Create-column */

    $(document).on("click", ".create-column", function () {
        var nameColumn = $("#name-column").val();
        var idColumn = $(".tasks-column").attr("id");
        if (nameColumn) {
            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
            });

            $.ajax({
                method: "POST",
                url: "/column",
                data: { column: idColumn, title: nameColumn },
            }).then((res) => {
                var column = $(
                    "<div class='col-3 tasks-column dropZone' id='" +
                        res.id +
                        "'><div class='card'><div class='card-body'><h5 class='card-title' contenteditable='true'>" +
                        res.title +
                        "<div class='column-close'></div></h5><p class='card-text'><input class='task-title' id='create-title' type='text' value='' placeholder='Add Task' data-value='" +
                        res.id +
                        "'></p></div><a href='#' class='btn btn-primary add-card' data-column='" +
                        res.id +
                        "' data-value='" +
                        res.id +
                        "'>Add card</a></div><input type='hidden' class='column-id' data-column='" +
                        res.id +
                        "' value='" +
                        res.id +
                        "'></div>"
                );

                $(".body-column").append(column);
                $("#name-column").val("");
                $("#name-column").removeAttr("class", "errors");
            });
        } else if (!nameColumn) {
            $("#name-column").attr("class", "errors");
        }

        // changeTitle();

        /* Drag and Drop */

        const dragItems = document.querySelectorAll(".dragItem");
        const dropZones = document.querySelectorAll(".dropZone");

        dragItems.forEach((dragItem) => {
            dragItem.addEventListener("dragstart", handlerDragstart);
            dragItem.addEventListener("dragend", handlerDragend);
            dragItem.addEventListener("drag", handlerDrag);
        });

        dropZones.forEach((dropZone) => {
            dropZone.addEventListener("dragenter", handlerDragenter);
            dropZone.addEventListener("dragleave", handlerDragleave);
            dropZone.addEventListener("dragover", handlerDragover);
            dropZone.addEventListener("drop", handlerDrop);
        });

        function handlerDragstart(event) {
            event.dataTransfer.setData("dragItem", this.dataset.item);
            this.classList.add("dropZone--hover");
        }

        function handlerDragend(event) {
            this.classList.remove("dropZone--hover");
        }

        function handlerDrag(event) {}

        function handlerDragenter(event) {
            event.preventDefault();
            this.classList.add("dropZone--hover");
        }

        function handlerDragleave(event) {
            this.classList.remove("dropZone--hover");
        }

        function handlerDragover(event) {
            event.preventDefault();
        }

        function handlerDrop(event) {
            const dragFlag = event.dataTransfer.getData("dragItem");
            const dragItem = document.querySelector(
                `[data-item="${dragFlag}"]`
            );
            this.append(dragItem);
        }
    });

    /* Create-card */

    $(document).on("click", ".add-card", function () {
        var column = $(this).data("column");
        var value = $(this).data("value");
        var $column = $(".tasks-column#" + column);

        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });
        var taskValue = $(".task-title").val();
        var idColumn = $(".column-id").attr("value");

        $.ajax({
            method: "POST",
            url: "/card",
            data: { title: taskValue, column_id: idColumn },
        }).then((res) => {
            var $task = $(
                "<div class='task dragItem' draggable='true'><p class='task-title'>" +
                    res.title +
                    "<div class='task-close'></div></p><input type='hidden' value='" +
                    res.id +
                    "'></div>"
            );
            $column.append($task);
        });
    });

    /*Column-close */

    $(document).on("click", ".column-close", function () {
        $(".tasks-column:hover").remove();
    });

    /*Card-close */

    $(document).on("click", ".task-close", function () {
        $(".task:hover").remove();
    });
});
