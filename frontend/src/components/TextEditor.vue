<template>
  <div class="text-editor-container">
    <AssignmentText />
  </div>
</template>

<script>
import AssignmentText from './AssignmentText.vue'

export default {
  components: {
    AssignmentText,
  }
}
</script>
<style scoped>
.text-editor-container {
  padding: 1rem;
}
</style>
