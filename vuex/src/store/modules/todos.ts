import axios from "axios";
import { GetterTree, ActionTree, MutationTree } from "vuex";

interface Todo {
  id: number;
  title: string;
}

interface State {
  todos: Todo[];
}

const state: State = {
  todos: [
    {
      id: 1,
      title: "Hi Bro"
    },
    {
      id: 2,
      title: "Hi 2"
    },
    {
      id: 3,
      title: "Hi 3"
    },
    {
      id: 4,
      title: "Hi 4"
    }
  ]
};

const getters: GetterTree<State, any> = {
  allTodos: (state) => state.todos
};

const actions: ActionTree<State, any> = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, todo) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        body: todo
      }
    );
    console.log(todo);
    commit("addTodo", response.data);
  },
  async updateTodo({ commit }, arguements) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${arguements.updateId}`,
      {
        body: arguements.updateBody
      }
    );
    commit("updateTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    commit("deleteTodo", id);
  }
};

const mutations: MutationTree<State> = {
  setTodos: (state, todos) => state.todos.push(...todos),
  addTodo: (state, todo) => state.todos.push(todo),
  updateTodo: (state, todo) => {
    const index = state.todos.findIndex((element) => element.id === todo.id);
    state.todos[index] = { id: todo.id, ...todo };
  },
  deleteTodo: (state, id) => {
    state.todos = state.todos.filter((element) => element.id !== id);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
