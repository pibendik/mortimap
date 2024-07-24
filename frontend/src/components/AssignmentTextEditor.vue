<template>
  <div class="text-editor-container">
    <HowToMakeAssignments />
    <div class="button-container">
      <button class="plus-button">+</button>
    </div>
  </div>
</template>

<script>
import HowToMakeAssignments from './HowToMakeAssignments.vue';

export default {
  components: {
    HowToMakeAssignments,
  }
}
</script>


<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.plus-button {
  font-size: 24px;
  line-height: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
