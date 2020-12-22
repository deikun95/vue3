<template>
  <ul class="list">
    <TodoItem v-for="todo in getTodos" :key="todo.id" :todo="todo" />
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
    const getTodos = computed(() => store.getters.getTodos);
    return {
      getTodos,
    };
  },
};
</script>

<style>
.list {
  padding: 0;
}
</style>
