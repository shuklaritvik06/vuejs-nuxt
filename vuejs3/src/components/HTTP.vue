<template>
  <!-- Get Data -->
  <div>
    <button @click="getPosts">Load Posts</button>
    <template v-if="posts.length !== 0">
      <div v-for="post in posts" :key="post">
        {{ post.title }}
      </div>
    </template>
  </div>
  <!-- Post Data -->
  <form @submit.prevent="submitPost">
    <input type="text" v-model="title" placeholder="Title" />
    <input type="text" v-model="body" placeholder="Body" />
    <input type="text" v-model="userId" placeholder="User Id" />
    <input type="submit" />
  </form>
  <div v-if="success.length != 0">{{ success }}</div>

  <!-- Focus input element -->
  <input type="text" ref="inputRef" id="focus" />
</template>

<script lang="ts">
/**
 * We have several Lifecycle Hooks in VueJs, let's understand them one by one,
 * these are
 *
 * -> beforeCreated, created
 * -> beforeMount, mounted,
 * -> beforeUpdate, updated
 * -> beforeUnmount, unmounted
 *
 *
 * Misc:
 *
 * => activated (kept alive component is activated)
 * => deactivated (kept alive component is deactivated)
 * => errorCaptured (error from any desc component is captured)
 * => renderTracked
 * => renderTriggered
 */

import axios from "axios";
import { defineComponent, ref } from "vue";
const inputRef = ref<HTMLInputElement | null>(
  document.getElementById("focus") as HTMLInputElement
);
export default defineComponent({
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      console.log(res.data);
    });
  },
  mounted() {
    (this.$refs.inputRef as any).focus();
  },
  data(): {
    posts: any;
    error: string;
    title: string;
    body: string;
    userId: string;
    success: string;
  } {
    return {
      posts: [],
      error: "",
      title: "",
      body: "",
      userId: "",
      success: ""
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((er: any) => {
          this.error = er.message;
          console.log(er);
        });
    },
    submitPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.title,
          body: this.body,
          userId: this.userId
        })
        .then(() => {
          this.success = "Added Data";
        })
        .catch((er: any) => {
          this.error = er.message;
        });
    }
  }
});
</script>

<style scoped></style>
