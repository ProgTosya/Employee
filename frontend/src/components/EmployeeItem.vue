<script setup>
import EmployeeItem from "./EmployeeItem.vue";
import { ref } from "vue";
import axios from "axios";
import draggable from "vuedraggable";

const props = defineProps({
  items: Array,
});

const allChild = ref();
const isOpen = ref(false);
const getChild = async (id) => {
  const data = await axios.get("api/child/" + id);
  allChild.value = data?.data?.employee[0].children_employees;
};

function toggle() {
  isOpen.value = !isOpen.value;
  getChild(props?.items[0].id);
}
</script>

<template>
  <ul>
    <draggable v-model="props.items" group="employee" item-key="id">
      <template #item="{ element }">
        <div class="cursor-grab group flex flex-col m-4" @click="toggle()">
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
                  {{ element?.first_name }} {{ element.middle_name }}
                  {{ element.last_name }}
                </div>
                <div class="text-gray-600 group-hover:text-gray-200">
                  {{ element.rank }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </draggable>
    <li class="m-3" v-show="isOpen" >
      <EmployeeItem v-for="item in allChild" :items="item"> </EmployeeItem>
    </li>
  </ul>
</template>
