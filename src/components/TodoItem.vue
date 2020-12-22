<template>
  <li class="item">
    <input type="checkbox" @change="toggleStatus" />
    <span class="title">{{ todo.title }}</span>
  </li>
</template>

<script>
// import { ref, reactive } from "vue";
// import { useStore } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    // const store = useStore();
    const toggleStatus = () => {

	};

    return {
		toggleStatus
	};
  },
};
</script>

<style>
.list {
  list-style-type: none;
  padding: 0;
  margin: 30px;
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(182, 182, 182, 0.5);
}
</style>
