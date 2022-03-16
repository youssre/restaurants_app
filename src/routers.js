import Home from "./components/HomeComp.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import AddRest from "./components/AddRest.vue"
import UpdateRest from "./components/UpdateRest.vue"
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name: "Home",
        component: Home,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up',
        
    },
    {
        name: "LogIn",
        component: LogIn,
        path: '/login'
    },
    {
        name: "Add",
        component: AddRest,
        path: '/add'
    },
    {
        name: "Update",
        component: UpdateRest,
        path: '/update/:id'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;