<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-content-body">
        <span class="close" @click="$emit('close')">&times;</span>
        <slot name="modal-body"> </slot>
        <slot name="modal-footer"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>
