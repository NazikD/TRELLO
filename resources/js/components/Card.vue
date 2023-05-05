<template>
  <div class="task dragItem" draggable="true">
    <p class="task-title">
        {{ card?.title }}
      <div class='task-close'></div>
    </p>
    <input type="hidden" :value="card?.id" />
  </div>
</template>

<script>
export default {
  name: "Card",

  props:{
    card: Object,
  },

  data() {
    return {
    //   card: null,
    };
  },

//     mounted() {
//     this.getCards();
//   },

  methods: {
    // getCards() {

    // },
  },
};
</script>

<style scoped>
</style>
