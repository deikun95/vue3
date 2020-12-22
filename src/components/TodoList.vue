<template>
  <ul class="list">
    <TodoItem v-for="todo in getTodos" :key="todo.id" todo />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore();
    console.log();
    return {};
  },
};
</script>

<style></style>
