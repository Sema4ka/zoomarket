import Main from "@/pages/Main.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Catalog from "@/pages/Catalog.vue"
import Cart from "@/pages/Cart.vue"

const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/catalog',
        component: Catalog
    },
    {
        path:"/cart",
        component: Cart
    }
]

const router = createRouter({
        routes,
        history: createWebHashHistory()
    }
)

export default router;