<script setup>
import { useAuthStore } from "@/stores/auth";
import { useEmployeeStore } from "@/stores/employee";
import { onMounted } from "vue";
import EmployeeItem from "./EmployeeItem.vue";

import draggable from 'vuedraggable'

const authStore = useAuthStore();
const employeeStore = useEmployeeStore();
employeeStore.getEmployee();

onMounted(async () => {
  if (!authStore.user) {
    await authStore.getUser();
  }
});

</script>
<template>
  <div>
      <EmployeeItem :items="employeeStore.employee"> </EmployeeItem>
  </div>
</template>