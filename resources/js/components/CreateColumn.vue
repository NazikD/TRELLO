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

<script setup>
import Modal from './Modal.vue';
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style scoped>
</style>
