<template>
  <li class="item">
    <input
      type="checkbox"
      @change="toggleStatus"
      :value="todo.isDone"
      class="checkbox"
    />
    <span class="title" @dblclick="toggleEdit" v-if="!isEdit">{{
      todo.title
    }}</span>
    <input
      type="text"
      class="title-edit"
      @keyup.enter="editTodo"
      v-model="title"
      v-else
    />
    <span class="delete" @click="deleteTodo">x</span>
  </li>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const store = useStore();
    const isEdit = ref(false);
    const title = ref(props.todo.title);
    const deleteTodo = () => {
      store.dispatch("deleteTodo", { id: props.todo.id });
    };
    const toggleStatus = () => {
      store.dispatch("toggleStatus", { id: props.todo.id });
    };
    const toggleEdit = () => {
      isEdit.value = true;
    };
    const editTodo = () => {
      store.dispatch("editTodo", { ...props.todo, title: title.value });
      isEdit.value = false;
    };
    return {
      toggleStatus,
      deleteTodo,
      toggleEdit,
      editTodo,
      title,
      isEdit,
    };
  },
};
</script>

<style lang="scss">
.item {
  list-style-type: none;
  max-width: 350px;
  margin: 23px;
  padding: 10px;
  line-height: 1.5;
  overflow: hidden;
  width: 350px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(182, 182, 182, 0.5);
}
.title {
  padding-left: 29px;
  cursor: pointer;
  &-edit {
    margin-left: 29px;
    outline: none;
  }
}
.checkbox {
  position: absolute;
}
.delete {
  cursor: pointer;
}
</style>
