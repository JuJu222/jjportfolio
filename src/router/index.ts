import Home from "../components/Home.vue";
import Portfolio from "../components/Portfolio.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
]

// 3. Create the index instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
    linkActiveClass: "bg-gray-900 navbar-active", // active class for non-exact links.
    linkExactActiveClass: "bg-gray-900 navbar-active" // active class for *exact* links.
})

export default router