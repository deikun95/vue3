<template>
  <div class="header">
    <input
      placeholder="Добавьте что-нибудь..."
      type="text"
      class="input"
      @keyup.enter="addTodo"
      v-model="title"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const title = ref("");
    
    const addTodo = () => {
      store.dispatch("addTodo", { title: title.value });
      clearInput();
    };
    const clearInput = () => {
      title.value = "";
    };

    return {
      addTodo,
      title,
    };
  },
};
</script>

<style>
.header {
  margin-top: 30px;
}
.input {
  width: 350px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #eeeeee;
  padding-left: 5px;
  outline: none;
  font-size: 18px;
}
</style>
