<template>
  <h2>TodoApp vue3</h2>
  <TodoInput />
  <TodoList />
</template>

<script>
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default {
  name: "App",
  components: {
    TodoList,
    TodoInput,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
