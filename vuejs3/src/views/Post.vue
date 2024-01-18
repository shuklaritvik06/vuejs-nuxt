<template>
  <div>{{ postDetail.body }}</div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps(["id"]);

console.log(props);

interface Post {
  body?: string;
  userId?: number;
  id?: number;
  title?: string;
}

const route = useRoute();
const router = useRouter();

console.log(router);

const postDetail = ref<Post>({});
onMounted(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then((res) => {
      postDetail.value = res.data;
    });
});
</script>

<style scoped></style>
