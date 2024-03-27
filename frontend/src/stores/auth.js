import {defineStore} from 'pinia';
import axios from "axios";
import {ref, computed} from 'vue'
import router from '@/router';

export const useAuthStore = defineStore("auth", () => {
    const authUser = ref(null)

    const user = computed(() => authUser.value)

    const getToken = async() => { 
        await axios.get("/sanctum/csrf-cookie") 
    }
    
    const getUser = async() => {
        await getToken()
        const data = await axios.get("/api/user")
        authUser.value = data.data  
    }

    const login = async(data) => {
        await getToken()
        await axios.post("/api/login", {
            email: data.email,
            password: data.password
        })
        router.push("/employee")
    }

    const register = async (data) => {
        await getToken()
        await axios.post("/api/register", {
            name: data.name,
            email: data.email,
            password: data.password
        });
        router.push("/")
    }

    const logout = async() => {
        await axios.post("/api/logout")
        authUser.value = null
        router.push("/")
    }


    return {
        authUser, user, getToken, getUser, register, login, logout
    }
}) 