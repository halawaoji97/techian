<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
const route = useRoute();

useHead({
  title: "sd by Oji Halawa",
  meta: [{ name: "og:title", content: `App Name - ${route.meta.title}` }],
});
</script>
