<template>
  <div v-if="posts.length !== 0" class="flex flex-col gap-5">
    <template v-for="post in posts" :key="post.id">
      <RouterLink
        :to="{ name: 'Post', params: { id: post.id } }"
        class="text-blue-800 underline"
        >{{ post.id }}</RouterLink
      >
    </template>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default defineComponent({
  setup() {
    const firstName = ref(4);
    const posts = ref<Post[]>([]);

    onMounted(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        posts.value = res.data;
      });
    });

    return {
      firstName,
      posts
    };
  }
});
</script>

<style scoped></style>
