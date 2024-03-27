import {defineStore} from 'pinia';
import axios from "axios";
import {ref, computed} from 'vue'



export const useEmployeeStore = defineStore("employee", () => {

    const employee = ref(null)
    const employeeData = computed(() => employee.value)

    const getEmployee = async() => {
        const data = await axios.get("api/director")
        employee.value = data?.data?.employee
    }

    return {
        employee, getEmployee, employeeData
    }
}) 