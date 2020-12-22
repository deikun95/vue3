import { createStore } from "vuex";

export default createStore({
  state: {
    todoList: [],
  },
  getters: {
    getTodos: (state) => state.todoList,
  },
  mutations: {
    ADD_TODO: (state, payload) => {
      state.todoList.push({
        title: payload.title,
        id: Date.now(),
        isDone: false,
      });
    },
    DELETE_TODO: (state, payload) => {
      state.todoList = state.todoList.filter((item) => item.id !== payload.id);
    },
    CLEAR_TODOS: (state) => {
      state.todoList = [];
    },
  },
  actions: {
    addTodo({ commit }, payload) {
      commit("ADD_TODO", payload);
    },
    deleteTodo({ commit }, payload) {
      commit("DELETE_TODO", payload);
    },
    clearTodos({ commit }) {
      commit("CLEAR_TODOS");
    },
  },
});
