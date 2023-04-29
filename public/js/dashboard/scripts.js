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

    /* Modal-card */

    // var btnCard = $("#cardBtn");
    // var modalCard = $(".card-body");

    // $(btnCard).click(function(){
    //     modalCard.css("display", "block");
    //     $(modalCard).animate({top: "0"}, "slow");
    // })

    /* Create-column */

    /* Modal-column */

    var modal = $("#myModal");
    var btn = $("#myBtn");
    var span = $(".close")[0];

    btn.click(function () {
        modal.css("display", "block");
    });

    $(span).click(function () {
        modal.css("display", "none");
        // $("#myModal").animate({top: "-100%"}, "slow", function() {
        //     modal.style.display = "none";
        //   });
    });

    $(window).click(function (event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
        // $("#myModal").animate({top: "-100%"}, "slow", function() {
        //     modal.style.display = "none";
        //   });
    });

    $(document).on("click", ".add-column", function () {
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
                        "'><div class='card'><h5 class='card-title' contenteditable='true'>" +
                        res.title +
                        "</h5><div class='accordion accordion-flush' id='accordionFlushExample'><div class='accordion-item'><h2 class='accordion-header'><button class='accordion-button collapsed bg-secondary' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'><div class='add-card' data-column='" +
                        res.id +
                        "'data-value='" +
                        res.id +
                        "'>Add card</div></button></h2><div id='flush-collapseOne' class='accordion-collapse collapse' data-bs-parent='#accordionFlushExample'><div class='accordion-body'><div class='card-body'><div class='card-body-modal'><p class='card-text'><input class='task-title' id='create-title' type='text' value='' placeholder='Add Task' data-value='" +
                        res.id +
                        "'><button class='btn btn-dark create-card' data-column='" +
                        res.id +
                        "'data-value='" +
                        res.id +
                        "'>Create</button></p></div></div></div></div></div></div></div><input type='hidden' class='column-id' data-column='" +
                        res.id +
                        "' value='" +
                        res.id +
                        "'></div>"
                );

                $(".body-column").append(column);
                $("#name-column").val("");
                $('.errors').css("display", "none");
                modal.css("display", "none");
            });
        } else if (!nameColumn) {
            $('.errors').css("display", "block");
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

    $(document).on("click", ".create-card", function () {
        // var column = $(".add-card").data("column");
        var column = $(".column-id").attr("value");
        console.log("column: " + column);
        var value = $(this).data("value");
        var $column = $('.tasks-column-' + column);
        var taskValue = $(".task-title[data-value='" + value + "']").val();
        var idColumn = $(".task-title[data-value='" + value + "']").data(
            "value"
        );
        var load = $("<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>Loading...")

        $(this).append(load);
        $(this).prop("disabled", true);

        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });

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
            // console.log('.tasks-column-' + column);
            // console.log('column', $column);
            // console.log('task', $task);
            $column.append($task);
            $(this).prop("disabled", false);
            $('.spinner-border').remove();
        })

    });

    /*Column-close */

    // $(document).on("click", ".column-close", function () {
    //     $(".tasks-column:hover").remove();
    // });

    /*Card-close */

    // $(document).on("click", ".task-close", function () {
    //     $(".task:hover").remove();
    // });
});
