<template>
    <div class="task dragItem" draggable="true">
      <p class="task-title">
          {{ card?.title }}
        <!-- <div class='task-close'></div> -->
      </p>
      <input type="hidden" :value="card?.id" />
    </div>
  </template>
  <script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Card",

    props:{
      card: Object,
    },

    setup(props) {

        return {

      };
    },
  });
  </script>
  <style scoped>
  </style>
