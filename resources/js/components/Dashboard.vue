<template>
  <div>
    <create-column
        @onCreate="create"
    ></create-column>

    <div class="row flex-grow-1 body-column">
    <column v-for="column in columns" :key="column.id" :column="column" :user="user"></column>
</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Column from "./Column.vue";

const columns = ref(props.columns);
const create = (newColumn) => {
  columns.value.push(newColumn);
};

const props = defineProps({
  columns: Object,
  user: Object,
});
</script>
