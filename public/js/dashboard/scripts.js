let tasksColumn = document.querySelector('.tasks-column');
let button = document.querySelector(".add-card");
var title = document.querySelector(".task-title");
var text = document.querySelector(".task-text");


$(document).ready(function () {

    /* Change-Title */
    function changeTitle() {
        const titlesColumn = document.querySelectorAll('.card-title');
        titlesColumn.forEach( title => {
            title.addEventListener('click', e=>e.target.textContent = '')
        });
    }

    /* Create-column */

    $(document).on("click", ".create-column", function () {
        var i=1;
        $(".tasks-column").each(function(){
            i++;
        })
        $('.row').append("<div class='col-3 tasks-column dropZone' id=' " + i + "'><div class='card'><div class='card-body'><div class='card-head'><h5 class='card-title' contenteditable = 'true'>Need to do</h5><div class='column-close'></div></div></div></div>")

    changeTitle();

        /* Drag and Drop */

        const dragItems = document.querySelectorAll('.dragItem');
        const dropZones = document.querySelectorAll('.dropZone');

        dragItems.forEach(dragItem => {
            dragItem.addEventListener('dragstart', handlerDragstart);
            dragItem.addEventListener('dragend', handlerDragend);
            dragItem.addEventListener('drag', handlerDrag);
        });

        dropZones.forEach(dropZone => {
            dropZone.addEventListener('dragenter', handlerDragenter);
            dropZone.addEventListener('dragleave', handlerDragleave);
            dropZone.addEventListener('dragover', handlerDragover);
            dropZone.addEventListener('drop', handlerDrop);
        });

        function handlerDragstart (event){
            event.dataTransfer.setData("dragItem", this.dataset.item);
            this.classList.add('dropZone--hover');
        }

        function handlerDragend(event) {
            this.classList.remove('dropZone--hover');
        }

        function handlerDrag(event) {
        }

        function handlerDragenter(event) {
            event.preventDefault();
            this.classList.add('dropZone--hover');
        }

        function handlerDragleave(event) {
            this.classList.remove('dropZone--hover');
        }

        function handlerDragover(event) {
            event.preventDefault();
        }

        function handlerDrop(event) {
            const dragFlag = event.dataTransfer.getData("dragItem")
            const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)
            this.append(dragItem);
        }

    })

    /* Create-card */

    $(document).on("click", ".add-card", function () {
        var taskCard = document.createElement("div");
        taskCard.classList.add('task', 'dragItem');
        taskCard.setAttribute("draggable", "true");

        var i=1;
        $(".task").each(function(){
            i++;
        })
        taskCard.setAttribute("data-item", i);

        var taskTitle = document.createElement("p");
        taskTitle.classList.add('task-title');
        taskTitle.innerHTML = title.value;

        var taskClose = document.createElement('div');
        taskClose.classList.add('task-close');

        if(title.value){
            tasksColumn.append(taskCard);
            taskCard.appendChild(taskTitle);
            taskTitle.appendChild(taskClose);
        }

        title.value = "";

    })

    /*Column-close */

    $(document).on("click", ".column-close", function () {
        $(".tasks-column:hover").remove();
    })

    /*Card-close */

    $(document).on("click", ".task-close", function () {
        $(".task:hover").remove();
    })
})
