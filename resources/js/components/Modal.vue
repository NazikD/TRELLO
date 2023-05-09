<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-content-body">
        <span class="close" @click="$emit('close')">&times;</span>
        <label class="name-column" for="name">
          <h4>Add name column</h4>
          <div class="form-floating">
            <input
              class="form-control"
              placeholder="Leave a name here"
              id="name"
              v-model="name"
            />
            <label for="floatingTextarea">Name column</label>
          </div>
          <p class="errors" v-show="showError">Please enter a name</p>
        </label>
        <button class="btn btn-secondary" @click.prevent="addColumn">
          Create column
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  data() {
    return {
      name: null,
      showError: false,
    };
  },

  methods: {
    addColumn() {
      let isValid = true;
      if (!this.name) {
        isValid = false;
        this.showError = true;
        return;
      }
      if (isValid) {
        axios.post("/column", { title: this.name }).then((res) => {
          this.name = null;
        });
      }
    },
  },
};
</script>

<style scoped>
</style>
