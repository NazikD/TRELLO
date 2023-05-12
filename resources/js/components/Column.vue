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
              <div
                class="add-card"
                :data-column="column.id"
                :data-value="column.id"
              >
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
                      id="create_title"
                      v-model="create_title"
                      type="text"
                      placeholder="Add Task"
                      :data-value="column.id"
                    />
                    <button
                      class="btn btn-dark create-card"
                      :data-value="column.id"
                      @click="addCards"
                    >
                      Create
                    </button>
                  </p>
                  <p class="errors" v-show="showError">Please enter a name</p>
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
import { ref } from "vue";

export default {
  name: "Column",

  props: {
    column: Object,
    card: Object,
    user: Object,
  },

  components: {
    Card,
  },

  setup(props) {
    const create_title = ref(null);
    const showError = ref(false);

    const addCards = async () => {
      if (!create_title.value) {
        showError.value = true;
        return;
      }
      try {
        const { data } = await axios.post("/card", {
          title: create_title.value,
          user_id: props.user.id,
          column_id: props.column.id,
        });
        props.column.cards.push(data);
        create_title.value = null;
      } catch (err) {
        console.error(err);
      }
    };

    return {
      create_title,
      showError,
      addCards,
    }
  },
};
</script>

<style scoped>
</style>ouse
ouse
