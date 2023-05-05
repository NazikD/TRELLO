<template>
<div>
    <div class="row justify-content-end">
        <div class="col-2 create-column" id="myBtn">
            <p class="create-column_text">Add column</p>
        </div>
    </div>
    <!-- <div class="modal-content">
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
    </div> -->
</div>
</template>

<script>
export default {
  name: "CreateColumnComponent",

  data() {
    return {
      nameColumn: null,
    };
  },

  methods: {
    addColumn(){
        // console.log(this.nameColumn);
    }
  },
};
</script>

<style scoped>
</style>
