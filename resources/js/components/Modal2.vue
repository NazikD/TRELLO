<!-- <template>
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
</template> -->
<!--
<script>
import { ref } from "vue";

export default {
  name: "Modal",

  props:{
    column: Object,
  },

  setup(props, { emit }) {
    const name = ref(null);
    const showError = ref(false);

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
        emit('close');
      } catch (err) {
        console.error(err);
      }
    };
    return {
      name,
      showError,
      addColumn,
    };
  },
};
</script>

<style scoped>
</style> -->
