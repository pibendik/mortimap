<template>
  <div class="text-editor-container">
    <AssignmentText />
    <AssignmentText />
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
  margin-top: 3rem;
}
</style>
