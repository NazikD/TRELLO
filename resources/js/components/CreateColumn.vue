<template>
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
  <modal v-if="showModal" @close="showModal = false"></modal>
</template>

<script>
import Modal from "./Modal.vue"
export default {
  name: "CreateColumn",

  data() {
    return {
        showModal: false,
    };
  },

  components: {
    Modal,
  },

  methods: {
    addColumn() {
      // console.log(this.nameColumn);
    },
  },
};
</script>

<style scoped>
</style>
