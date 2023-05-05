<template>
  <div :class="'col-3 tasks-column-' + column.id + ' dropZone'">
    <div class="card">
      <h5 class="card-title" contenteditable="true">
        {{ column.title }}
      </h5>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#flush-collapseOne-' + column.id"
              aria-expanded="false"
              :aria-controls="'flush-collapseOne-' + column.id"
            >
              <div class="add-card" :data-column="column.id" :data-value="column.id">
                Add card
              </div>
            </button>
          </h2>
          <div
            :id="'flush-collapseOne-' + column.id"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div class="card-body">
                <div class="card-body-modal">
                  <p class="card-text">
                    <input
                      class="task-title"
                      id="create-title"
                      type="text"
                      value=""
                      placeholder="Add Task"
                      :data-value="column.id"
                    />
                    <button class="btn btn-dark create-card" :data-value="column.id">
                      Create
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input type="hidden" class="column-id" :value="column.id" />
        <card v-for="card in column.cards" :card="card" :key="card.id"></card>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Column",

  props: {
    column: Object,
    card: Object
  },

  data() {
    return {
      columns: null,
    };
  },

  components: {
    Card,
  },

  //   mounted() {
  //     this.getCards();
  //   },

  methods: {
    // getCards() {
    //   axios.post("columns").then((data) => {
    //     this.columns = data.data;
    //   });
    // },
  },
};
</script>

<style scoped>
</style>
