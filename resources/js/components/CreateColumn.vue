<template>
  <div>
    <div>
      <div class="row justify-content-end">
        <div
          class="col-2 create-column"
          id="show-modal"
          @click="showModal = true"
        >
          <p class="create-column_text">Add column</p>
        </div>
      </div>
    </div>

    <modal v-if="showModal" @close="showModal = false">
      <template #modal-body>
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
      </template>

      <template #modal-footer>
        <button class="btn btn-secondary" @click.prevent="addColumn">
          Create column
        </button>
      </template>
    </modal>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import Modal from "./Modal.vue";

const showModal = ref(false);
const name = ref(null);
const showError = ref(false);

const emit = defineEmits(['onCreate']);

const addColumn = async () => {
  if (!name.value) {
    showError.value = true;
    return;
  }
  try {
    const { data } = await axios.post("/column", {
      title: name.value,
    });
    name.value = null;
    showModal.value = false;
    emit('onCreate', data);
  } catch (err) {
    console.error(err);
  }
};
</script>

<style scoped>
</style>
