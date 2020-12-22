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
      console.log(state.todoList);
    },
    DELETE_TODO: (state, payload) => {
      state.todoList = state.todoList.filter((item) => item.id !== payload.id);
    },
    CLEAR_TODOS: (state) => {
      state.todoList = [];
    },
    TOGGLE_STATUS: (state, payload) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    },
    EDIT_TODO: (state, payload) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            title: payload.title,
          };
        }
        return todo;
      });
    },
  },
  actions: {
    addTodo({ commit }, payload) {
      if (payload.title.trim()) {
        commit("ADD_TODO", payload);
      }
    },
    deleteTodo({ commit }, payload) {
      commit("DELETE_TODO", payload);
    },
    clearTodos({ commit }) {
      commit("CLEAR_TODOS");
    },
    toggleStatus({ commit }, payload) {
      commit("TOGGLE_STATUS", payload);
    },
    editTodo({ commit }, payload) {
      if (payload.title.trim()) {
        commit("EDIT_TODO", payload);
      }
    },
  },
});
