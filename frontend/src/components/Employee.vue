<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(async () => {
  if (!authStore.user) {
    await authStore.getUser();
  }
});
</script>
<template></template>