<template>
  <div>Create Todo</div>
  <input type="text" v-model="todo" />
  <input type="submit" value="" @click="addTodo(todo)" />
  <div>Update Todo</div>
  <input type="text" name="" v-model="updateBody" />
  <input type="number" name="" v-model.number="updateId" />
  <input type="submit" value="" @click="updateTodo({ updateId, updateBody })" />
  <div>Delete Todo</div>
  <input type="number" name="" v-model.number="deleteId" />
  <input type="submit" value="" @click="deleteTodo(deleteId)" />
  <div v-for="item in allTodos" :key="item.id">
    {{ item }}
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { mapGetters, useStore, mapActions } from "vuex";
export default {
  created() {
    this.fetchTodos();
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos", "addTodo", "updateTodo", "deleteTodo"])
  },
  setup(props) {
    const store = useStore();
    const todo = ref("");
    const updateBody = ref("");
    const updateId = ref(0);
    const deleteId = ref(0);
    console.log(props, store.state);
    return { todo, updateBody, updateId, deleteId };
  }
};
</script>

<style scoped></style>
