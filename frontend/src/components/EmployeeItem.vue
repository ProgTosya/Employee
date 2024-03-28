<script setup>
import EmployeeItem from "./EmployeeItem.vue";
import { ref } from "vue";
import axios from "axios";
import draggable from "vuedraggable";
import { useEmployeeStore } from "@/stores/employee";

const employeeStore = useEmployeeStore();

const props = defineProps({
  items: Array,
});
const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}

const getChild = async (id) => {
  const data = await axios.get("api/child/" + id);
  props.items[0].child = data?.data?.employee[0].children_employees;
};
</script>

<template>
    <draggable :list="items" item-key="id" tag="ul">
      <template #item="{ element }">
          <div
            class="cursor-grab group flex flex-col m-4"
            @click="
              getChild(element.id);
              toggle();
            "
          >
            <div
              class="flex flex-col bg-gray-200 max-w-sm shadow-md py-3 px-10 md:px-8 rounded-md group-hover:bg-blue-500"
            >
              <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <img
                  class="rounded-full border-4 border-gray-100 h-20 w-20 mx-auto"
                  src="https://randomuser.me/api/portraits/men/78.jpg"
                />
                <div class="flex flex-col text-center md:text-left">
                  <div
                    class="font-medium text-lg text-gray-900 group-hover:text-white"
                  >
                    {{ props?.items[0].first_name }} {{ props?.items[0].middle_name }}
                    {{ props?.items[0].last_name }}
                  </div>
                  <div class="text-gray-600 group-hover:text-gray-200">
                    {{ props?.items[0].rank }}
                  </div>
                </div>
              </div>
            </div>
          </div>        
          <EmployeeItem 
              class="m-3"
              v-if="isOpen"
              v-for="item in element.child"
              :items="[item]"
              >
          </EmployeeItem>
      </template>
    </draggable>
            
</template>
